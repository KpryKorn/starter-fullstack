import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import index from "./routes/app.js";
import { auth } from "./lib/auth.js";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

// middlewares
app.use("*", logger());
app.use(
  "/api/auth/*",
  cors({
    origin: "http://localhost:3001",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);
app.use(
  "/api/v1/*",
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
// vérifie la session dans les headers
app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

// auth
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

// health
app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

// applique un middleware pour vérifier si l'utilisateur est connecté
app.use("/api/v1/*", async (c, next) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user || !session) {
    return c.json(
      {
        error: "Unauthorized",
      },
      401
    );
  }
  return next();
});
app.route("/api/v1", index);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

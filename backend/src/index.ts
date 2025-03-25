import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import index from "./routes/app.js";
import { auth } from "./lib/auth.js";

const app = new Hono();

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
app.use("*", cors());

// auth
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

// health
app.get("/health", (c) => {
  return c.json({ status: "ok" });
});

// app
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

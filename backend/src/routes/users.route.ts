import { Hono } from "hono";
import { db } from "../db/index.js";
import { user } from "../db/schema.js";
import { eq } from "drizzle-orm";

const usersRoute = new Hono();

usersRoute.get("/", async (c) => {
  const users = await db.select().from(user);

  return c.json(users);
});

usersRoute.get("/:id", async (c) => {
  const id = c.req.param("id");
  const singleUser = await db
    .select()
    .from(user)
    .where(eq(user.id, id as string));

  if (!singleUser) {
    return c.json({ message: "User not found" }, 404);
  }

  return c.json(singleUser);
});

export default usersRoute;

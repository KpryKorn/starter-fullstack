import { Hono } from "hono";
import usersRoute from "./users.route.js";

const index = new Hono();

index.route("/users", usersRoute);

export default index;

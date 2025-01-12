import { Hono } from "hono";
import { hello } from "./hello";

export const v1 = new Hono();

v1.route("/", hello);

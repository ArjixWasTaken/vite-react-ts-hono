import { Hono } from "hono";
import { v1 } from "./v1";

export const routes = new Hono()
    .route("/v1", v1);

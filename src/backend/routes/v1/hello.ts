import { Hono } from "hono";

export const hello = new Hono().basePath("/hello");

hello.get("/", async (ctx) => {
    return ctx.json({ message: "Hello from hono!" });
});

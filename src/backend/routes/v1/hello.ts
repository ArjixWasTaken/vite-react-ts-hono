import { Hono } from "hono";

// NOTE: It is important to chain everything together, so the generated type is aware of all the methods
// and their return types.

export const hello = new Hono()
    .basePath("/hello")
    .get("/", async (ctx) => {
        return ctx.json({ message: "Hello from hono!" });
    });

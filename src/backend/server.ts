import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { readFile } from "node:fs/promises";

import { routes } from "./routes";

const isProd = process.env["NODE_ENV"] === "production";
let html = await readFile(isProd ? "build/index.html" : "index.html", "utf8");

if (!isProd) {
    // Inject Vite client code to the HTML
    html = html.replace(
        "<head>",
        `<head>
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>
    `,
    );
}

const app = new Hono()
    .route("/api", routes)
    .get("/*", (c) => c.html(html));

export default app;

if (isProd) {
    serve({
        fetch: app.fetch,
        port: 4000,
    }, (info) => {
        console.log(`Listening on http://localhost:${info.port}`);
    });
}

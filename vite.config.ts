import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import devServer from "@hono/vite-dev-server";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 4000,
    },
    plugins: [
        react(),
        devServer({
            entry: "src/backend/server.ts",
            injectClientScript: false,
        }),
    ],
});

import { hc } from "hono/client";
import type { API } from "@backend";

export const api = hc<API>("/").api;

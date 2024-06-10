import { Hono } from 'hono';
declare const app: Hono<import("hono").Env, import("hono/types").BlankSchema, "/">;
declare const _default: {
    fetch(request: Request, env: Record<string, string>, ctx: Parameters<typeof app.fetch>[2]): Promise<Response>;
};
export default _default;

// Creates a child account for the signed-in parent. Only the server may set app_metadata,
// which is where the child role and the link to the parent are stored.
import { createClient } from "npm:@supabase/supabase-js@2.118.0";

const NICK = /^[a-z0-9_]{3,20}$/;
const MIN_PASSWORD = 6;
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const reply = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  const secret = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}").default ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, secret, { auth: { persistSession: false } });

  const token = req.headers.get("Authorization")?.replace(/^Bearer /, "") ?? "";
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return reply(401, { error: "not_signed_in" });
  if (user.app_metadata?.role === "child") return reply(403, { error: "not_a_parent" });

  const { nick, password } = await req.json().catch(() => ({}));
  const typed = String(nick ?? "").trim();
  const name = typed.toLowerCase();
  if (!NICK.test(name)) return reply(400, { error: "bad_nick" });
  if (String(password ?? "").length < MIN_PASSWORD) return reply(400, { error: "weak_password" });

  const { data, error } = await admin.auth.admin.createUser({
    email: `${name}@mozgobum.invalid`,
    password,
    email_confirm: true,
    app_metadata: { role: "child", parent_id: user.id },
    user_metadata: { nick: typed },
  });
  if (error) return reply(error.code === "email_exists" ? 409 : 400, { error: error.code === "email_exists" ? "nick_taken" : "failed" });

  return reply(200, { id: data.user.id, nick: typed });
});

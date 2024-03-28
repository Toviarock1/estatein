import db from "./db";
export async function GET(request: Request) {
  const result = await db.query("SELECT * FROM users");
  return Response.json(result);
}

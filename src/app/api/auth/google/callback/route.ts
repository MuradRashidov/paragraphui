import { API_URL } from "@/lib/constants";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const avatar = searchParams.get("avatar");
  const name = searchParams.get("name");
  const token = searchParams.get("token");
  const resp = await fetch(`${API_URL}auth/verify-token`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (resp.status == 401) throw new Error("Jwt verifing failed");
  await createSession({
    user: {
      id: userId || undefined,
      name: name || undefined,
      avatar: name || undefined,
    },
    accessToken: token!,
  });
  redirect("/");
  //return NextResponse.json({ success: true });
}

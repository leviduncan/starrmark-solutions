import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.WORDPRESS_REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "Revalidation is not configured" },
      { status: 501 }
    );
  }

  const provided =
    request.headers.get("x-revalidate-secret") ??
    new URL(request.url).searchParams.get("secret");

  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("wordpress", { expire: 0 });
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

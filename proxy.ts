// This function can be marked `async` if using `await` inside
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./helpers/auth";

export async function proxy(request: NextRequest) {
  try {
    const bearerKey = request.cookies.get("bearer_key")?.value;
    if (!bearerKey) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    await getUser(bearerKey);
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|images|_next/static|_next/image|signin|signup|events|jobs|programs||).*)",
  ],
};

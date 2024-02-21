import { NextResponse } from "next/server";

export function middleware(req) {
  //   console.log("Hello middleware");
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/about/:path*"],
};

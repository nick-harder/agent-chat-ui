import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    const validTokens = process.env.VALID_TOKENS?.split(",") ?? [];

    if (validTokens.includes(token)) {
      // Token is valid
      return NextResponse.json({ valid: true });
    }

    // Token is invalid
    return NextResponse.json({ valid: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
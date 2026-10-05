export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    return NextResponse.json({
      status: "ok",
      timestamp,
      service: "Codex Studio VE Cron",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}

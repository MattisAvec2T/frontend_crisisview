import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "../config";

export async function GET() {
  const res = await fetch(`${BACKEND_URL}/interventions`);
  return NextResponse.json(await res.json());
}

export async function POST(request: NextRequest) {
  const res = await fetch(`${BACKEND_URL}/interventions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(await request.json()),
  });
  return NextResponse.json(await res.json());
}

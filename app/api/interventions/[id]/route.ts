import { NextRequest, NextResponse } from "next/server";
import { BACKEND_URL } from "../../config";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`${BACKEND_URL}/interventions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(await request.json()),
  });
  return NextResponse.json(await res.json());
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await fetch(`${BACKEND_URL}/interventions/${id}`, { method: "DELETE" });
  return NextResponse.json({ success: true });
}

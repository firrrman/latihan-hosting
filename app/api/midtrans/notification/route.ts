import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json();

  const serverKey = process.env.MIDTRANS_SERVER_KEY!;
  const signature = crypto
    .createHash("sha512")
    .update(body.order_id + body.status_code + body.gross_amount + serverKey)
    .digest("hex");

  if (signature !== body.signature_key) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  console.log("STATUS DARI MIDTRANS:", body.transaction_status);

  return NextResponse.json({ message: "OK" });
}

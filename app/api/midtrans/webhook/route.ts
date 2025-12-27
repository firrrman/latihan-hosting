import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    order_id,
    transaction_status,
    payment_type,
    gross_amount,
    signature_key,
    status_code,
  } = body;

  // 🔐 VALIDASI SIGNATURE
  const serverKey = process.env.MIDTRANS_SERVER_KEY!;
  const rawSignature = order_id + status_code + gross_amount + serverKey;

  const expectedSignature = crypto
    .createHash("sha512")
    .update(rawSignature)
    .digest("hex");

  if (signature_key !== expectedSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
  }

  // 🔄 SET STATUS BERDASARKAN MIDTRANS
  if (transaction_status === "settlement") {
    await prisma.order.update({
      where: { paymentOrderId: order_id },
      data: {
        status: "PAID",
        paymentMethod: payment_type,
        paidAt: new Date(),
      },
    });
  }

  if (transaction_status === "expire" || transaction_status === "cancel") {
    await prisma.order.update({
      where: { paymentOrderId: order_id },
      data: {
        status: "CANCELLED",
      },
    });
  }

  return NextResponse.json({ message: "OK" });
}

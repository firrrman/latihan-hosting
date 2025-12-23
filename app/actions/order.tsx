"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function orderItem(formData: FormData) {
  const orderId = formData.get("orderId") as string;
  const productId = formData.get("productId") as string;
  const sizeId = formData.get("sizeId") as string;
  const colorId = formData.get("colorId") as string;
  const quantity = parseInt(formData.get("quantity") as string);
  const price = parseFloat(formData.get("price") as string);

  if (!orderId || !productId || !quantity || !price || !sizeId || !colorId) {
    throw new Error("Data belum lengkap");
  }

  await prisma.orderItem.create({
    data: {
      orderId,
      productId,
      sizeId,
      colorId,
      quantity,
      price,
    },
  });

  revalidatePath("/");
}

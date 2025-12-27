/*
  Warnings:

  - A unique constraint covering the columns `[paymentOrderId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentOrderId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "paymentMethod" TEXT,
ADD COLUMN     "paymentOrderId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_paymentOrderId_key" ON "Order"("paymentOrderId");

/*
  Warnings:

  - Added the required column `ongkir` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ongkir` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "ongkir" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "ongkir" INTEGER NOT NULL;

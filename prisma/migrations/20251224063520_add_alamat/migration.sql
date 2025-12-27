/*
  Warnings:

  - Added the required column `city` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdistrict` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "subdistrict" TEXT NOT NULL,
ADD COLUMN     "village" TEXT NOT NULL;

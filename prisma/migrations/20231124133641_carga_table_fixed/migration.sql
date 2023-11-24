/*
  Warnings:

  - You are about to drop the column `createdAt` on the `carga` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `carga` table. All the data in the column will be lost.
  - Added the required column `estado` to the `Carga` table without a default value. This is not possible if the table is not empty.
  - Made the column `fecha_entrega` on table `carga` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `carga` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    MODIFY `fecha_recibo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `fecha_entrega` DATETIME(3) NOT NULL;

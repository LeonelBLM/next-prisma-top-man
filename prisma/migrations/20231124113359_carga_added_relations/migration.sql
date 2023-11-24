-- CreateTable
CREATE TABLE `Carga` (
    `id_carga` INTEGER NOT NULL AUTO_INCREMENT,
    `remitenteId` INTEGER NOT NULL,
    `destinatarioId` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `destino` VARCHAR(191) NOT NULL,
    `fecha_recibo` DATETIME(3) NOT NULL,
    `fecha_entrega` DATETIME(3) NULL,
    `importe` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_carga`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Carga` ADD CONSTRAINT `Carga_remitenteId_fkey` FOREIGN KEY (`remitenteId`) REFERENCES `Cliente`(`id_cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carga` ADD CONSTRAINT `Carga_destinatarioId_fkey` FOREIGN KEY (`destinatarioId`) REFERENCES `Cliente`(`id_cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

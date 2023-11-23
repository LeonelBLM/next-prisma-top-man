-- CreateTable
CREATE TABLE `Cliente` (
    `id_cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    UNIQUE INDEX `Cliente_telefono_key`(`telefono`),
    PRIMARY KEY (`id_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chofer` (
    `id_chofer` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Chofer_email_key`(`email`),
    UNIQUE INDEX `Chofer_telefono_key`(`telefono`),
    PRIMARY KEY (`id_chofer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

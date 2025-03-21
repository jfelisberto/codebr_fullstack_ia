/*
  Warnings:

  - You are about to drop the column `destaques` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `destaques` on the `tecnologias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "destaques",
ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "descricao" SET DEFAULT NULL,
ALTER COLUMN "tipo" SET DEFAULT NULL,
ALTER COLUMN "imagem" SET DEFAULT NULL,
ALTER COLUMN "repositorio" SET DEFAULT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "deleted_at" SET DEFAULT NULL,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "destaques",
ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "descricao" SET DEFAULT NULL,
ALTER COLUMN "imagem" SET DEFAULT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "deleted_at" SET DEFAULT NULL;

-- AlterTable
ALTER TABLE "tecnologias" ALTER COLUMN "descricao" SET DEFAULT NULL,
ALTER COLUMN "imagem" SET DEFAULT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "deleted_at" SET DEFAULT NULL;

-- CreateTable
CREATE TABLE "projetos" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "descricao" TEXT DEFAULT NULL,
    "tipo" VARCHAR(255) DEFAULT NULL,
    "imagem" TEXT DEFAULT NULL,
    "nivel" INTEGER NOT NULL,
    "repositorio" TEXT DEFAULT NULL,
    "destaques" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

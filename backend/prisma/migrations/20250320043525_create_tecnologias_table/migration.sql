-- CreateTable
CREATE TABLE "tecnologias" (
    "id" BIGSERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "destaques" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT DEFAULT NULL,
    "imagem" TEXT DEFAULT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP DEFAULT NULL,

    CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id")
);

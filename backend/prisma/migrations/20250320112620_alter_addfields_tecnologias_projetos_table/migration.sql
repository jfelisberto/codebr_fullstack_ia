-- AlterTable
ALTER TABLE "projetos" ADD COLUMN     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP DEFAULT NULL,
ADD COLUMN     "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "descricao" SET DEFAULT NULL,
ALTER COLUMN "tipo" SET DEFAULT NULL,
ALTER COLUMN "imagem" SET DEFAULT NULL,
ALTER COLUMN "repositorio" SET DEFAULT NULL;

-- AlterTable
ALTER TABLE "tecnologias" ALTER COLUMN "descricao" SET DEFAULT NULL,
ALTER COLUMN "imagem" SET DEFAULT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "deleted_at" SET DEFAULT NULL;

-- CreateTable
CREATE TABLE "_ProjetoToTecnologia" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_ProjetoToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoToTecnologia_B_index" ON "_ProjetoToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

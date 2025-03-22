import { Tecnologia } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TecnologiaProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Tecnologia[]> {
		return [
			{
				id: 1,
				nome: "Teste",
				descricao:
					"Mussum Ipsum, cacilds vidis litro abertis. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Mé faiz elementum girarzis, nisi eros vermeio. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
				imagem: "https://mussumipsum.com/_next/static/media/bg_home.fb320b8f.jpg",
				destaque: false,
			},
		]
		// return this.prisma.tecnologia.findMany()
		// return this.prisma.tecnologia.findMany(
		// 	{
		// 		id: BigInt,
		// 		nome: String,
		// 		descricao: String,
		// 		imagem: String,
		// 		destaque: Boolean,
		// 	}
		// )
	}

	async obterDestaques(): Promise<Tecnologia[]> {
		return this.prisma.tecnologia.findMany({
			where: {
				destaque: true,
			},
		})
	}
}

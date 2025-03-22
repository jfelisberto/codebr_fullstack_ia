import { Tecnologia } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TecnologiaPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Tecnologia[]> {
		return this.prisma.tecnologia.findMany() as any
	}

	async obterDestaques(destaque: boolean): Promise<Tecnologia | null> {
		return this.prisma.tecnologia.findMany({
			where: {
				destaque: destaque,
			},
		}) as any
	}

	async obterPorId(id: number): Promise<Tecnologia | null> {
		return this.prisma.tecnologia.findUnique({
			where: { id },
			include: { projetos: true },
		}) as any
	}
}

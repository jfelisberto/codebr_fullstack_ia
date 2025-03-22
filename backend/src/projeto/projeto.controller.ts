import { Controller, Get, Param } from "@nestjs/common"
import { ProjetoPrisma } from "./projeto.prisma"
import { Projeto } from "@core"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly projetoPrisma: ProjetoPrisma) {}

	@Get()
	async obterTodas(): Promise<Projeto[]> {
		return this.projetoPrisma.obterTodas()
	}

	@Get("destaques")
	async obterDestaques(): Promise<Projeto[]> {
		return this.projetoPrisma.obterDestaques()
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.projetoPrisma.obterPorId(Number(id))
	}
}

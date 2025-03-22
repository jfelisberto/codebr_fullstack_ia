import { Controller, Get, Param } from "@nestjs/common"
import { Tecnologia } from "@core"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly tecnologiaPrisma: TecnologiaPrisma) {}

	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.tecnologiaPrisma.obterTodas()
	}

	@Get(":destaque")
	async obterDestaques(@Param("destaque") destaque: string): Promise<Tecnologia | null> {
		return this.tecnologiaPrisma.obterDestaques(Boolean(destaque))
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Tecnologia | null> {
		return this.tecnologiaPrisma.obterPorId(Number(id))
	}
}

import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos/Projetos"
import Container from "@/components/shared/Container"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />

			<Container className="py-16 flex flex-col items-center gap-10">
				<Projetos title="Destaque" list={projetos.destaques} />
				<Projetos title="Web" list={projetos.web} />
				<Projetos title="Mobile" list={projetos.mobile} />
				<Projetos title="Jogos" list={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}

import { Tecnologia } from "@core"
import { httGet } from "./api"

export async function obterTecnologias() {
    const tecnologias: Tecnologia[] = await httGet("/tecnologias")

    return {
        todas: tecnologias,
        get destaques() {
            return tecnologias.filter((tecnologia) => tecnologia.destaque)
        },
    }
}

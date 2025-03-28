import Image from "next/image";

export default function MiniCV() {
    return (
		<div className="flex-1 flex lg:flex-col-reverce xl:flex-row lg:items-center xl:items-start bg-black border border-zinc-800 rouded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-68 xl:self-end">
				<Image src="/minha-foto.png" alt="minha-foto" fill />
			</div>

			<div className="flex flex-col gap-5 self-center py-6 lg:items-center xl:items-start">
				<div className="flex flex-col items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Juliano E. Felisberto
					</span>
					<span>CEO JEFWeb Desenvolvimento</span>
				</div>

				<p className="text-sm md:text-left lg:items-center xl:text-left">
					Desenvolvedor FullStack - HTML5, CSS, JavaScript, JQuery, Kendo-UI for JQuery,
					Bootstrap, PHP, Framework Laravel, Framework Smarty-PHP, MySQL, Implementação de
					API's, Type Script, React JS, Node JS, Nest JS, Next JS, Prisma e PostgreSQL
				</p>
			</div>
		</div>
	)
}

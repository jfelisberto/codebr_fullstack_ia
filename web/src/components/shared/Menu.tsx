"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
	const path = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" select={path == "/"}>
				Inicio
			</MenuItem>
			<MenuItem href="/projeto/1" select={path.startsWith("/projeto")}>
				Projetos
			</MenuItem>
			<MenuItem href="/tecnologia/1" select={path.startsWith("/tecnologia")}>
				Tecnologia
			</MenuItem>
			<MenuItem href="https://api.whatsapp.com/send/?phone=5511989985447&text=Ola&type=phone_number" select={false} target={true}>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	select: boolean
	target?: boolean
}) {
	return (
		<Link href={props.href} target={props.target ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 hover:text-blue-300 ${
					props.select ? "border-b-4 text-white" : "text-zinx-400"
				}`}
			>
				{props.children}
			</span>
		</Link>
	)
}

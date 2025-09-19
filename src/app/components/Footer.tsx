import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../logoskillswap.png";
import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagramFilled,
	IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
	const navItems = [
		{
			name: "Home",
			link: "#features",
		},
		{
			name: "Swap List",
			link: "#lista-swap",
		},
		{
			name: "Dashboard",
			link: "#dashboard",
		},
		{
			name: "Contatti",
			link: "#contact",
		},
		{
			name: "Privacy",
			link: "#privacy",
		},
	];

	const icons = [
		{
			href: "",
			icon: <IconBrandFacebook />,
		},
		{
			href: "",
			icon: <IconBrandInstagramFilled />,
		},
		{
			href: "",
			icon: <IconBrandLinkedin />,
		},
		{
			href: "",
			icon: <IconBrandGithub />,
		},
	];

	return (
		<footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-blue-400  w-full relative overflow-hidden">
			<div className="max-w-7xl mx-auto text-sm text-neutral-500 justify-between items-start md:px-8">
				<div className="flex flex-col items-center justify-center w-full relative">
					<div className="mr-0 md:mr-4 md:flex mb-4">
						<Link
							className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
							href="/"
						>
							<Image
								alt="logo"
								loading="lazy"
								width={30}
								height={30}
								src={logo}
							/>
							<span className="font-medium text-black dark:text-white">
								Skill Swap Market
							</span>
						</Link>
					</div>
					<ul className="transition-colors flex  hover:text-text-neutral-800 text-white list-none gap-4">
						{navItems.map((item) => (
							<li key={item.name}>
								<Link
									className="transition-colors hover:text-text-neutral-800"
									href="/products"
									prefetch={false}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex justify-between mt-8 items-center w-full text-white">
					<p className="text-white  sm:mb-0">© Skill Swap Market</p>
					<div className="flex gap-4">
						{icons.map((icon, idx) => (
							<Link href={icon.href} prefetch={false} key={idx}>
								<div>{icon.icon}</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

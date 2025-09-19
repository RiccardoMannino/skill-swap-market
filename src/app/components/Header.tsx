"use client";

import Link from "next/link";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";

export default function Header() {
	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Swap List",
			link: "/swap",
		},
		{
			name: "Dashboard",
			link: "/dashboard",
		},
		{
			name: "Contatti",
			link: "/contatti",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="relative w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						<NavbarButton className="text-white bg-green-500">
							Login
						</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<Link
								key={`mobile-link-${idx}`}
								href={item.link}
								prefetch={false}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative "
							>
								<span className="block text-white">{item.name}</span>
							</Link>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								className="w-full bg-green-500 text-white"
							>
								Login
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</header>
	);
}

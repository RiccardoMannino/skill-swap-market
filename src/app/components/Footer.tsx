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
    <footer className="relative w-full overflow-hidden border-t border-neutral-100 bg-blue-500 px-8 py-20 dark:border-white/[0.1]">
      <div className="mx-auto max-w-7xl items-start justify-between text-sm text-neutral-500 md:px-8">
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="mr-0 mb-4 md:mr-4 md:flex">
            <Link
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
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
          <ul className="hover:text-text-neutral-800 flex list-none gap-4 text-white transition-colors">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="hover:text-text-neutral-800 transition-colors"
                  href="/products"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex w-full items-center justify-between text-white">
          <p className="text-white sm:mb-0">© Skill Swap Market</p>
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

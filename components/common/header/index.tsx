import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import {
  NavLink,
  NavLinks,
  NavLinksSM,
} from "@/components/common/header/nav-links";

import { env } from "@/lib/env";

export const AUTH_ACTIONS: NavLink[] = [
  {
    name: "Sign in",
    link: "/signin",
  },
];

export const Header: FC = () => {
  return (
    <header>
      <nav className={"flex items-center justify-between"}>
        <div className="flex space-x-12 items-center">
          <NavLogo />
          <NavLinks />
        </div>
        <div className="flex space-x-6">
          <AuthActions />
          <NavLinksSM />
        </div>
      </nav>
    </header>
  );
};

export const AuthActions: FC = () => {
  return (
    <div className={"hidden xl:flex items-center space-x-6 "}>
      {AUTH_ACTIONS.map((link, index) => (
        <Button key={index} asChild variant={"secondary"}>
          <Link href={link.link}>{link.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export const NavLogo: FC = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo.png"}
        unoptimized
        className={"w-16 md:w-24"}
        alt={env.app.name ?? "Logo"}
        width={112}
        height={40}
      />
    </Link>
  );
};

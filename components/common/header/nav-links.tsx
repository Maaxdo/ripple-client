import { Menu } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { AUTH_ACTIONS } from "@/components/common/header/index";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/common/sheet";

export type NavLink = {
  name: string;
  link: string;
};

const NAV_LINKS: NavLink[] = [
  {
    name: "Programs",
    link: "/programs",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Insights",
    link: "/insights",
  },
  {
    name: "Jobs",
    link: "/jobs",
  },
];
export const NavLinks = () => {
  return (
    <div className={"hidden xl:flex items-center space-x-6"}>
      {NAV_LINKS.map((link, index) => (
        <Link key={index} href={link.link} className={"text-[#F5F3F0B2]"}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export const NavLinksSM: FC = () => {
  return (
    <div className={"block xl:hidden"}>
      <Sheet>
        <SheetTrigger asChild>
          <Button className={"text-white"}>
            <Menu className={"size-5"} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <div className={"space-y-5 p-8"}>
            <ul className={"space-y-4"}>
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className={"w-full block text-lg"}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={"space-y-4"}>
              {AUTH_ACTIONS.map((link, index) => (
                <li key={index}>
                  <Button asChild variant={"outline"}>
                    <Link href={link.link}>{link.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

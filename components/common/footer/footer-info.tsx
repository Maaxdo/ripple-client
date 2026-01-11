import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { NavLogo } from "@/components/common/header";
import { X } from "@/components/common/icons/x";

export const FooterInfo = () => {
  return (
    <div className={"w-full md:w-8/12 space-y-10"}>
      <div>
        <NavLogo />
      </div>
      <p
        className={
          "text-white text-xs md:text-sm lg:text-base w-8/12 md:w-7/12"
        }
      >
        Ripple Universe™ equips creatives, technologists, and innovators with
        the skills, community, and culture needed to thrive in AI and emerging
        tech.
      </p>
      <div className="flex gap-3">
        <Link href={"/"} className={"text-white"}>
          <Facebook className={"size-6"} />
        </Link>
        <Link href={"/"} className={"text-white"}>
          <Instagram className={"size-6"} />
        </Link>
        <Link href={"/"} className={"text-white"}>
          <X size={22} />
        </Link>
        <Link href={"/"} className={"text-white"}>
          <Linkedin className={"size-6"} />
        </Link>
        <Link href={"/"} className={"text-white"}>
          <Youtube className={"size-6"} />
        </Link>
      </div>
    </div>
  );
};

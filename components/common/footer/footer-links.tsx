import Link from "next/link";
import { FC } from "react";
import { NAV_LINKS } from "@/lib/auth";

export const FooterLinks: FC = () => {
  return (
    <div className={"lg:w-4/12 grid grid-cols-1 md:grid-cols-2 gap-8"}>
      <ul className={"space-y-4"}>
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className={"text-[#F5F3F0B2] text-sm md:text-base"}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={"space-y-6"}>
        <div className={"text-white"}>
          <h4 className={"text-sm md:text-base font-medium"}>Address:</h4>
          <p className={"text-xs md:text-base"}>
            Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam
            nunc tellus.{" "}
          </p>
        </div>
        <div className={"text-white"}>
          <h4 className={"text-sm md:text-base font-medium"}>Contact:</h4>
          <p className={"underline text-xs md:text-base"}>+1 703 4565 284</p>
          <p className={"underline text-xs md:text-base"}>
            <Link href={"mailto:hello@ripple.com"}>hello@ripple.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

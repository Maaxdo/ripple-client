import { FC } from "react";
import { Copyright } from "@/components/common/footer/copyright";
import { FooterInfo } from "@/components/common/footer/footer-info";
import { FooterLinks } from "@/components/common/footer/footer-links";

export const Footer: FC = () => {
  return (
    <div className={"space-y-12"}>
      <div className={"h-[0.1rem] bg-[#4B4B4B]"}></div>

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <FooterInfo />
        <FooterLinks />
      </div>
      <div className={"h-[0.1rem] bg-[#4B4B4B]"}></div>
      <Copyright />
    </div>
  );
};

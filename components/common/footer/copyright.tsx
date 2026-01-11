"use client";

import Link from "next/link";
import { FC } from "react";
import { env } from "@/lib/env";

export const Copyright: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className={"flex flex-col md:flex-row justify-between"}>
      <p className={"text-xs md:text-sm text-white"}>
        {year}&copy; {env.app.name}. All rights reserved.
      </p>
      <div className="flex gap-4 text-white">
        <Link className={"text-xs md:text-sm"} href={"/"}>
          Privacy Policy
        </Link>
        <Link className={"text-xs md:text-sm"} href={"/"}>
          Terms of Service
        </Link>
        <Link className={"text-xs md:text-sm"} href={"/"}>
          Cookie settings
        </Link>
      </div>
    </div>
  );
};

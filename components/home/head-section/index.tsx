import Image from "next/image";
import { FC } from "react";
import { Header } from "@/components/common/header";
import { Hero } from "@/components/home/head-section/hero";

export const HeadSection: FC = () => {
  return (
    <div
      className={
        "pt-7 px-4 md:px-16 lg:px-24 xl:px-32 bg-black rounded-2xl relative"
      }
    >
      <Image
        src={"/images/home/hero-2.png"}
        alt={"Hero 2"}
        width={355}
        height={800}
        className={"w-48 md:w-72 lg:w-96 absolute right-0 -top-4"}
      />
      <Image
        src={"/images/home/hero-3.png"}
        alt={"Hero 2"}
        width={185}
        height={195}
        className={"w-16 md:w-36 absolute left-0 bottom-32 md:bottom-44"}
      />
      <div className={"mx-auto space-y-12"}>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

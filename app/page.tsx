import Image from "next/image";
import { Building } from "@/components/home/building";
import { Explore } from "@/components/home/explore";
import { HeadSection } from "@/components/home/head-section";
import { Hero } from "@/components/home/head-section/hero";
import { Newsletter } from "@/components/home/newsletter";
import { Trusted } from "@/components/home/trusted";

export default function Home() {
  return (
    <>
      <HeadSection>
        <Hero />
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
      </HeadSection>
      <Trusted />
      <Building />
      <Explore />
      <Newsletter />
    </>
  );
}

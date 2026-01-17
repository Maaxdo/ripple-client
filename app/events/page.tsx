import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/events/hero";
import { Partner } from "@/components/events/partner";
import { TypesOfEvents } from "@/components/events/types-of-events";
import { UpcomingEvents } from "@/components/events/upcoming-events";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join live sessions, galleries, workshops, and community meetups—online and offline.",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <Hero />
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={"hidden lg:block w-24 xl:w-36 absolute left-1/5 bottom-0"}
        />
      </HeadSection>
      <TypesOfEvents />
      <div className="space-y-12">
        <UpcomingEvents />
        <Partner />
      </div>
    </>
  );
}

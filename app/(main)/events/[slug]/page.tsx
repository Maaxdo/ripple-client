import { Metadata } from "next";
import Image from "next/image";
import { EventCarouselBanner } from "@/components/construction/event-carousel-banner";
import { EventInfo } from "@/components/events/event-info";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Event details",
  description:
    "Join live sessions, galleries, workshops, and community meetups—online and offline.",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <EventCarouselBanner />
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={"hidden lg:block w-24 xl:w-36 absolute left-1/5 bottom-0"}
        />
      </HeadSection>
      <EventInfo />
    </>
  );
}

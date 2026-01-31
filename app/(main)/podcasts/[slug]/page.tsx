import { Metadata } from "next";
import { PodcastDetailsHero } from "@/components/blogs/hero/podcast-details-hero";
import { OtherPodcasts } from "@/components/blogs/other-podcasts";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Podcasts details",
  description:
    "From beginner-friendly pathways to advanced creative tech labs, Ripple offers programs designed for real-world impact.",
};

export default function Page() {
  return (
    <>
      <HeadSection>
        <PodcastDetailsHero />
      </HeadSection>
      <OtherPodcasts />
    </>
  );
}

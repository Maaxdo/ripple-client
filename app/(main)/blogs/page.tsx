import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BlogItems } from "@/components/blogs/blog-items";
import { Hero } from "@/components/blogs/hero";
import { Newsletter } from "@/components/blogs/newsletter";
import { PodcastItems } from "@/components/blogs/podcast-items";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Blogs & Podcasts",
  description:
    "From beginner-friendly pathways to advanced creative tech labs, Ripple offers programs designed for real-world impact.",
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

      <div className="space-y-12">
        <Suspense>
          <BlogItems />
          <PodcastItems />
        </Suspense>
        <Newsletter />
      </div>
    </>
  );
}

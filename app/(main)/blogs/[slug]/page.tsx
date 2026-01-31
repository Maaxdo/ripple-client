import { Metadata } from "next";
import Image from "next/image";
import { BlogContent } from "@/components/blogs/blog-content";
import { BlogDetailsHero } from "@/components/blogs/hero/blog-details-hero";
import { OtherArticles } from "@/components/blogs/other-articles";
import { HeadSection } from "@/components/home/head-section";

export const metadata: Metadata = {
  title: "Blog details",
  description:
    "From beginner-friendly pathways to advanced creative tech labs, Ripple offers programs designed for real-world impact.",
};
export default function Page() {
  return (
    <>
      <HeadSection>
        <BlogDetailsHero />
        <Image
          src={"/images/jobs/hero-2.png"}
          alt={"Hero 2"}
          width={185}
          height={195}
          className={"hidden lg:block w-24 xl:w-36 absolute left-1/5 bottom-0"}
        />
      </HeadSection>
      <div className="space-y-5">
        <BlogContent />
        <OtherArticles />
      </div>
    </>
  );
}

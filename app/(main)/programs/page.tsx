import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { HeadSection } from "@/components/home/head-section";
import { Hero } from "@/components/programs/hero";
import { Skills } from "@/components/programs/skills";
import { SkillList } from "@/components/programs/skills/skill-list";
import { Testimonials } from "@/components/programs/testimonials";
import { WhyPrograms } from "@/components/programs/why-programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Learn the Skills shaping the future",
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
      <div className="bg-white space-y-6">
        <Suspense>
          <Skills />
          <SkillList />
          <Testimonials />
          <WhyPrograms />
        </Suspense>
      </div>
    </>
  );
}

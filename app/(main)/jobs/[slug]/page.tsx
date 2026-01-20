import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/common/button";
import { HeadSection } from "@/components/home/head-section";
import { Apply } from "@/components/jobs/apply";
import { JobListingHero } from "@/components/jobs/hero/job-listing-hero";
import { JobInfo } from "@/components/jobs/job-info";

export const metadata: Metadata = {
  title: "Job",
  description: "Creative tech opportunities",
};

export default function Page() {
  return (
    <div className={"bg-[#FFFCF3]"}>
      <HeadSection>
        <JobListingHero />
      </HeadSection>
      <div className="space-y-8">
        <JobInfo />
        <Apply />
        <div className={"flex justify-center"}>
          <Button asChild variant={"outline"}>
            <Link href={"/jobs"}>
              <ChevronLeft />
              <span>Back to all jobs</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

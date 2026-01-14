import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze, manRope } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Jobs: FC = () => {
  return (
    <div className={"bg-[#E9FFEC] rounded-xl p-8 w-full xl:w-9/12 space-y-4"}>
      <div className="flex justify-between">
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-[1.5rem] uppercase`}
        >
          Ripple <br /> <span className="text-secondary">jobs</span>
        </h2>
        <Button variant={"outline"} asChild>
          <Link href={"/"}>Explore all Jobs</Link>
        </Button>
      </div>
      <p className={"text-sm md:text-base max-w-sm"}>
        Discover jobs, internships, and opportunities created and curated by
        Ripple.
      </p>

      <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
        <Job title={"Senior Software Developer"} location={"Google"} />
        <Job title={"Senior Software Developer"} location={"Google"} />
        <Job title={"Senior Software Developer"} location={"Google"} />
        <Job title={"Senior Software Developer"} location={"Google"} />
        <Job title={"Senior Software Developer"} location={"Google"} />
        <Job title={"Senior Software Developer"} location={"Google"} />
      </div>
    </div>
  );
};

type JobProps = ComponentProps<"div"> & {
  title: string;
  location: string;
};

export const Job: FC<JobProps> = ({
  location,
  title,
  className,
  ...restProps
}) => {
  const c = cn("rounded-xl bg-white py-7 px-5 space-y-4", className);

  return (
    <div className={c} {...restProps}>
      <div className={`flex justify-between ${manRope.className}`}>
        <Link
          href={"/jobs/slug"}
          className={"font-medium text-base md:text-lg hover:text-[#FF6C24]"}
        >
          <span className={"max-w-56 block"}>{title}</span>
        </Link>
        <button
          className={
            "rounded-full bg-[#FFF2E7] w-10 h-8 md:h-10 flex justify-center items-center"
          }
        >
          <ArrowRight className={"text-[#FF6C24] size-4 md:size-6"} />
        </button>
      </div>
      <p
        className={
          "text-[#696969] flex items-center space-x-0 md:space-x-1 text-xs md:text-sm lg:text-base"
        }
      >
        <span>{location}</span> <Dot /> <span>Location</span>
      </p>
      <div className={"flex flex-wrap items-center gap-4"}>
        <span
          className={
            "bg-[#F5FAEF] text-[#71AC36] text-[0.7rem] px-2 py-1 rounded-xl"
          }
        >
          Job type
        </span>
        <span
          className={
            "bg-[#EEF6FC] text-[#399AD6] text-[0.7rem] px-2 py-1 rounded-xl"
          }
        >
          Experience level
        </span>
        <span
          className={
            "bg-[#FEEFEC] text-[#EF4920] text-[0.7rem] px-2 py-1 rounded-xl"
          }
        >
          Job style
        </span>
      </div>
    </div>
  );
};

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";

export const Podcasts: FC = () => {
  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
      </div>
      <Pagination
        total={1}
        currentPage={1}
        perPage={12}
        lastPage={1}
        from={1}
        to={1}
      />
    </div>
  );
};

export const Podcast: FC = () => {
  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Link href={"/podcasts/slug"} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={"/images/home/event-1.png"}
          alt={"Title here"}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={"/podcasts/slug"}
            className={"font-bold text-sm md:text-base"}
          >
            Episode Title
          </Link>
          <p className={"text-xs md:text-sm"}>
            Short episode summary here. Preferably a 2 liner.
          </p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className="space-y-3">
        <div className={"flex gap-1"}>
          <span
            className={"bg-[#E0E2FF] text-xs px-3 py-1 rounded-full text-black"}
          >
            Episode 4
          </span>
          <span
            className={"bg-gray-200 text-xs px-3 py-1 rounded-full text-black"}
          >
            5 min
          </span>
        </div>
        <div>
          <Link
            href={"/podcasts/slug"}
            className={
              "text-[#EF4920] flex items-center space-x-1 text-xs md:text-sm"
            }
          >
            <span>Listen now</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

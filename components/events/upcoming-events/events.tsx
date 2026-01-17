import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Pagination } from "@/components/common/pagination";

export const Events: FC = () => {
  return (
    <div className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
      <Pagination />
    </div>
  );
};

const Event: FC = () => {
  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Image
        className={"block object-cover w-full rounded-3xl h-72"}
        src={"/images/home/event-1.png"}
        alt={"Title here"}
        width={230}
        height={330}
      />
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <h3 className={"font-bold text-sm md:text-base"}>Event title</h3>
          <p className={"text-xs md:text-sm"}>02/12/25</p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className={"flex gap-1"}>
        <span
          className={"bg-[#E0E2FF] text-xs px-3 py-1 rounded-full text-black"}
        >
          Free
        </span>
        <span
          className={"bg-gray-200 text-xs px-3 py-1 rounded-full text-black"}
        >
          Physical
        </span>
      </div>
    </div>
  );
};

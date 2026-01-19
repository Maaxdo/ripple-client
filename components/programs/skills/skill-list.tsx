import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const SkillList: FC = () => {
  return (
    <div className={"text-[#F8F8F8] rounded-3xl px-6 py-8 bg-[#F8F8F8]"}>
      <div className="px-3 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded-3xl">
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
        <Program />
      </div>
    </div>
  );
};

export const Program: FC = () => {
  return (
    <div className={"bg-white p-4 rounded-3xl space-y-3"}>
      <Link href={"/programs/slug"} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={"/images/home/event-1.png"}
          alt={"Title here"}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={"/programs/slug"}
            className={"font-bold text-sm md:text-base"}
          >
            Title of the course here
          </Link>
          <p className={"text-xs md:text-sm"}>Ripple</p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className={"flex gap-1"}>
        <span
          className={
            "bg-[#FF81D1] text-xs font-medium px-3 py-1 rounded-full text-black"
          }
        >
          Intermediate
        </span>
        <span
          className={
            "bg-gray-200 text-xs font-medium px-3 py-1 rounded-full text-black"
          }
        >
          4.6
        </span>
      </div>
      <h2 className={"text-black font-bold text-xl md:text-2xl"}>$19.99</h2>
    </div>
  );
};

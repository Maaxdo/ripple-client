import Image from "next/image";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const CourseContent: FC = () => {
  return (
    <section
      className={"space-y-12 rounded-2xl border border-[#E3E1CD] bg-white my-4"}
    >
      <Container className={"max-w-md lg:max-w-7xl space-y-7 py-8"}>
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          course <span className={"text-secondary"}>content</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="space-y-4 lg:w-7/12 xl:w-8/12">
            <Module />
            <Module />
            <Module />
            <Module />
          </div>
          <div className="lg:w-5/12 xl:w-4/12">
            <div
              className={
                "flex items-center border border-[#E6E6E6] rounded-2xl p-5 space-y-1 divide-x-[0.09rem] divide-[#0000003B]"
              }
            >
              <div className={"space-y-1 pr-2 w-5/12 md:w-4/12"}>
                <p className="text-xs text-[#4E4E4E]">Course offered by</p>
                <Image
                  src={"/images/programs/header.png"}
                  alt={"Ripple"}
                  width={100}
                  height={40}
                  className={"w-20 md:w-24"}
                />
              </div>
              <div className={"pl-4 w-7/12 md:w-8/12"}>
                <p className="text-xs">
                  Short sentence or brief about the people offering the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Module: FC = () => {
  return (
    <div className={"bg-[#F1F1F1] text-[#4E4E4E] rounded-2xl p-5 space-y-1"}>
      <p className="text-sm">Module 1</p>
      <h2 className="text-xl font-bold">Module title here</h2>
      <p className="text-sm font-medium">
        Short sentences about the module here. Preferably a 2 liner sentence.
        Preferably a 2 liner sentence.
      </p>
    </div>
  );
};

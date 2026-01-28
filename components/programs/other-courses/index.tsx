"use client";

import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Input } from "@/components/common/form/input";
import { Program } from "@/components/programs/skills/skill-list";
import { useRelatedPrograms } from "@/hooks/programs";
import { madeSoulmaze } from "@/lib/fonts";

export const OtherCourses: FC = () => {
  const programs = useRelatedPrograms();

  return (
    <section className={"space-y-12 rounded-2xl bg-[#F8F8F8] my-4 relative"}>
      <Image
        src={"/images/jobs/hero-2.png"}
        alt={"Hero 2"}
        width={185}
        height={195}
        className={
          "hidden lg:block w-24 xl:w-36 absolute left-1/5 top-0 rotate-180"
        }
      />
      <Container className={"max-w-md lg:max-w-7xl space-y-7 py-8"}>
        <h2
          className={`${madeSoulmaze.className} text-center text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase pr-6`}
        >
          other courses <span className={"text-secondary"}>for you</span>
        </h2>
        <form className={"mx-auto max-w-sm flex relative"}>
          <Input
            placeholder={"Enter your email"}
            className={"border-[#D5D7DA] rounded-full h-10"}
            type={"email"}
          />
          <Button size={"lg"} className={"-translate-x-10"}>
            Join
          </Button>
        </form>
        <div className="px-3 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded-3xl">
          {programs.data?.map((program) => (
            <Program key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
};

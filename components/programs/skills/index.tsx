import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { BulbMoney } from "@/components/common/icons/bulb-money";
import { Connect } from "@/components/common/icons/connect";
import { Grid } from "@/components/common/icons/grid";
import { Laptop } from "@/components/common/icons/laptop";
import { Particles } from "@/components/common/icons/particles";
import { Security } from "@/components/common/icons/security";
import { Stars } from "@/components/common/icons/stars";
import { Search } from "@/components/common/search";
import { SkillList } from "@/components/programs/skills/skill-list";
import { creatoDisplay, madeSoulmaze } from "@/lib/fonts";

export const Skills: FC = () => {
  return (
    <section className={"pt-7 pb-3 px-4 rounded-2xl relative overflow-hidden"}>
      <Image
        src={"/images/programs/skills.png"}
        width={1600}
        height={580}
        alt={"Skills"}
        className={"absolute -top-36"}
      />
      <Container className={"space-y-8 max-w-2xl"}>
        <h2
          className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          Skills to transform <br /> your life and{" "}
          <span className={"text-secondary"}>career</span>
        </h2>
        <Search placeholder={"Search for courses or skill"} />
        <Categories />
      </Container>
    </section>
  );
};

export const Categories: FC = () => {
  return (
    <div className={"space-y-4"}>
      <h3
        className={`text-base md:text-xl lg:text-2xl font-bold text-center ${creatoDisplay.className}`}
      >
        Explore Categories
      </h3>
      <div
        className={
          "flex justify-center md:items-center gap-2 md:gap-3 flex-wrap"
        }
      >
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Grid />
          <span>Category</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Stars />
          <span>Artificial Inteligence</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Particles />
          <span>Information Technology</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Connect />
          <span>Personal Development</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <BulbMoney />
          <span>Business</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Security />
          <span>Security</span>
        </Button>
        <Button className={"bg-[#F5F5F5] text-xs md:text-sm"} variant={"ghost"}>
          <Laptop />
          <span>Computer science</span>
        </Button>
      </div>
    </div>
  );
};

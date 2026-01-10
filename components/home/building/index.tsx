import { FC } from "react";
import { Container } from "@/components/common/container";
import { BuildingItems } from "@/components/home/building/items";
import { madeSoulmaze } from "@/lib/fonts";

export const Building: FC = () => {
  return (
    <section className={"bg-[#F8FFC7] pt-7 pb-3 px-4 rounded-2xl relative"}>
      <Container className={"space-y-5"}>
        <h1
          className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          What We&apos;re <br />{" "}
          <span className={"text-secondary"}>Building</span>
        </h1>
        <p
          className={
            "text-[#4E4E4E] text-xs md:text-sm lg:text-base text-center mx-auto max-w-md"
          }
        >
          Structured programs, courses, and labs designed to help you break into
          creative AI and tech.
        </p>
        <BuildingItems />
      </Container>
    </section>
  );
};

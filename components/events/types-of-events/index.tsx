import Image from "next/image";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const TypesOfEvents: FC = () => {
  return (
    <section className={"pt-7 pb-3 px-4 rounded-2xl relative overflow-hidden"}>
      <Container className={"space-y-8 max-w-7xl"}>
        <h2
          className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          types of events <br /> we{" "}
          <span className={"text-secondary"}>host</span>
        </h2>
        <Image
          src={"/images/events/types.png"}
          alt={"event types"}
          width={2000}
          height={1300}
          className={"w-full object-cover"}
        />
      </Container>
    </section>
  );
};

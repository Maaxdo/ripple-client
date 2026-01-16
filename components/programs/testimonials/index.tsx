import Image from "next/image";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { aeonik, madeSoulmaze } from "@/lib/fonts";

export const Testimonials: FC = () => {
  return (
    <section className={"bg-black rounded-2xl py-8 relative"}>
      <div
        className={
          "testimonial-fade-left h-64 top-12 w-9 md:w-24 absolute z-20"
        }
      ></div>
      <div
        className={
          "testimonial-fade-right h-64 top-12 w-9 md:w-24 absolute z-20 right-0 "
        }
      ></div>

      <Container>
        <h2
          className={`text-center ${madeSoulmaze.className} text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          TESTIMONIALS
        </h2>
      </Container>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-expect-error*/}
      <marquee
        behavior="smooth"
        className={"flex gap-4 mt-6 relative z-10"}
        direction="left"
      >
        <div className="flex gap-4">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-expect-error*/}
      </marquee>
    </section>
  );
};

const Testimonial: FC = () => {
  return (
    <div
      className={`bg-white px-5 py-6 rounded-3xl w-[20rem] space-y-4 ${aeonik.className}`}
    >
      <p className={"text-wrap"}>
        Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc
        tellus. Sed non sit sed nunc nam nunc tellus.
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={"/images/programs/testimonial.png"}
          alt={"Testimonial"}
          width={25}
          height={25}
          className={"size-6"}
        />
        <h5 className={`${aeonik.className} font-bold`}>Milli Chapo</h5>
      </div>
    </div>
  );
};

"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/common/carousel";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const CourseReviews: FC = () => {
  return (
    <section
      className={"space-y-12 rounded-2xl border border-[#E3E1CD] bg-white my-4"}
    >
      <Container className={"max-w-md lg:max-w-7xl space-y-7 py-8"}>
        <div className="flex divide-x divide-[#0000003B]">
          <h2
            className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase pr-6`}
          >
            course <span className={"text-secondary"}>reviews</span>
          </h2>
          <div className="flex items-center gap-2 pl-6">
            <h5 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">4.6</h5>
            <div className="flex items-center">
              <Star className={"fill-[#FF78E6] stroke-none size-4 lg:size-6"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4 lg:size-6"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4 lg:size-6"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4 lg:size-6"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4 lg:size-6"} />
            </div>
            <p className={"text-[#0E0E0EB2] text-sm md:text-base lg:text-lg"}>
              46 ratings
            </p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-4">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <div className="block lg:hidden">
          <Carousel className={"w-full"}>
            <CarouselContent>
              <CarouselItem>
                <Review />
              </CarouselItem>
              <CarouselItem>
                <Review />
              </CarouselItem>
              <CarouselItem>
                <Review />
              </CarouselItem>
              <CarouselItem>
                <Review />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className={"-left-3 md:-left-12"} />
            <CarouselNext className={"-right-3 md:-right-12"} />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

const Review: FC = () => {
  return (
    <div className={"rounded-3xl border border-[#E9E9E9] p-6 space-y-3"}>
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc
        tellus. Sed non sit sed nunc nam nunc tellus.
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={"/images/programs/testimonial.png"}
          alt={"review"}
          width={25}
          height={25}
          className={"w-6"}
        />
        <div>
          <div className="font-medium">Flames Joda</div>
          <div className="flex divide-x divide-[#00000012]">
            <span className="pr-2 text-xs">1 week ago</span>
            <div className="pl-2 flex items-center">
              <Star className={"fill-[#FF78E6] stroke-none size-4"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4"} />
              <Star className={"fill-[#FF78E6] stroke-none size-4"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

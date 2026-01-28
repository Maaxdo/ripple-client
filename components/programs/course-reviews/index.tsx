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
import { Review as ReviewType } from "@/helpers/programs";
import { useProgram, useProgramReview } from "@/hooks/programs";
import { madeSoulmaze } from "@/lib/fonts";

export const CourseReviews: FC = () => {
  const program = useProgram();
  const reviews = useProgramReview();

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
            <h5 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">
              {program.data?.rating.avg_rating}
            </h5>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.round(program.data?.rating.avg_rating || 0)
                      ? "fill-[#FF78E6] stroke-none size-4 lg:size-6"
                      : "fill-gray-400 stroke-none size-4 lg:size-6"
                  }
                />
              ))}
            </div>
            <p className={"text-[#0E0E0EB2] text-sm md:text-base lg:text-lg"}>
              {program.data?.rating.count} ratings
            </p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-4">
          {reviews.data?.data.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>
        <div className="block lg:hidden">
          <Carousel className={"w-full"}>
            <CarouselContent>
              {reviews.data?.data.map((review) => (
                <CarouselItem key={review.id}>
                  <Review review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"-left-3 md:-left-12"} />
            <CarouselNext className={"-right-3 md:-right-12"} />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

const Review: FC<{ review: ReviewType }> = ({ review }) => {
  const program = useProgram();

  return (
    <div className={"rounded-3xl border border-[#E9E9E9] p-6 space-y-3"}>
      <p className="text-sm md:text-base">{review.review}</p>
      <div className="flex items-center gap-4">
        <Image
          src={"/images/programs/testimonial.png"}
          alt={"review"}
          width={25}
          height={25}
          className={"w-6"}
        />
        <div>
          <div className="font-medium">
            {review.user?.full_name ?? "Unknown user"}
          </div>
          <div className="flex divide-x divide-[#00000012]">
            <span className="pr-2 text-xs">{review.created_at}</span>
            <div className="pl-2 flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.round(program.data?.rating.avg_rating || 0)
                      ? "fill-[#FF78E6] size-4 stroke-none"
                      : "fill-[#555555] size-4 stroke-none"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

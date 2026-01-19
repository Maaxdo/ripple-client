import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/common/breadcrumb";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Divider } from "@/components/common/divider";
import { madeSoulmaze } from "@/lib/fonts";

export const ProgramHero: FC = () => {
  return (
    <section>
      <Container
        className={
          "max-w-md lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between pb-16 gap-12"
        }
      >
        <div className={"w-full lg:w-1/2 space-y-6 lg:space-y-8"}>
          <div className={"space-y-6 lg:space-y-8"}>
            <Breadcrumb>
              <BreadcrumbList className={"text-xs md:text-base"}>
                <BreadcrumbItem>
                  <BreadcrumbLink className={"text-gray-400"} asChild>
                    <Link href={"/programs"}>Ripple Programs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className={"text-white"} />
                <BreadcrumbItem className={"text-white"}>
                  Program ID 5742
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1
              className={`text-center lg:text-left text-white ${madeSoulmaze.className} text-2xl md:text-4xl lg:text-4xl xl:text-[3.43rem] leading-7 md:leading-10 lg:leading-12`}
            >
              name of <span className={"text-[#FFF8C7]"}>skills</span>
              <br />
              <span className={"text-[#FFF8C7]"}>program</span>{" "}
              <span className={"text-[#FF78E6]"}>here</span>
            </h1>
            <p
              className={
                "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
              }
            >
              Brief about program here. Brief about program here. Brief about
              program here.Brief about program here
            </p>
            <p
              className={
                "text-[#F5F3F0B2] text-xs md:text-sm xl:text-base text-center lg:text-left"
              }
            >
              Created by <span className={"font-bold text-white"}>Ripple</span>
            </p>
            <div className={"flex justify-center lg:justify-start"}>
              <Button asChild size={"lg"} variant={"secondary"}>
                <Link href={"#courses"}>Enroll for this course</Link>
              </Button>
            </div>
          </div>
          <Divider />
          <div className="flex divide-x-[0.09rem] divide-[#FFFFFF3B]">
            <div className={"pr-5"}>
              <div className="flex items-center gap-2">
                <h5 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                  4.6
                </h5>
                <div className="flex items-center">
                  <Star
                    className={"fill-[#FF78E6] size-4 md:size-6 lg:size-9"}
                  />
                  <Star
                    className={"fill-[#FF78E6] size-4 md:size-6 lg:size-9"}
                  />
                  <Star
                    className={"fill-[#FF78E6] size-4 md:size-6 lg:size-9"}
                  />
                  <Star
                    className={"fill-[#FF78E6] size-4 md:size-6 lg:size-9"}
                  />
                  <Star
                    className={"fill-[#FF78E6] size-4 md:size-6 lg:size-9"}
                  />
                </div>
              </div>
              <p className={"text-[#F5F3F0B2] text-xs lg:text-base xl:text-lg"}>
                46 ratings
              </p>
            </div>
            <div className={"pl-5"}>
              <div className="flex items-center gap-2">
                <h5 className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                  Beginner
                </h5>
              </div>
              <p className={"text-[#F5F3F0B2] text-xs lg:text-base xl:text-lg"}>
                Recommended experience
              </p>
            </div>
          </div>
        </div>

        <div className={"w-full lg:w-1/2 flex justify-center"}>
          <Image
            src={"/images/programs/program.png"}
            alt={"Job"}
            width={670}
            height={550}
            className={"w-9/12 xl:w-7/12 object-cover"}
          />
        </div>
      </Container>
    </section>
  );
};

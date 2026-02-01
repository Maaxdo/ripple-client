import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "@/components/common/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { manRope } from "@/lib/fonts";

export const CategoriesList: FC = () => {
  return (
    <div className={"space-y-6"}>
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

const Category: FC = () => {
  return (
    <div
      className={
        "border-2 border-[#F2F2F2] rounded-lg px-7 py-4 flex flex-col lg:flex-row gap-6"
      }
    >
      <div className={`lg:w-4/12 xl:w-3/12 space-y-4 ${manRope.className}`}>
        <div>
          <Badge className={"bg-[#F5FAEF] text-green-600"}>Books</Badge>
        </div>
        <h3
          className={
            "font-semibold text-xl md:text-2xl lg:text-3xl line-clamp-2"
          }
        >
          Read. Reflect. Reframe.
        </h3>
        <p className="text-xs md:text-sm text-[#4E4E4E] line-clamp-4">
          Thoughtfully curated books exploring creativity, technology, culture,
          and the future of work—designed to challenge perspectives and inspire
          new ways of thinking.
        </p>
        <Link href={""} className={"block text-green-600 text-xs md:text-sm"}>
          See all
        </Link>
      </div>

      <div className="hidden lg:w-8/12 xl:w-9/12 lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className={"w-full h-78 border-4 border-[#F2F2F2] rounded-3xl"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/home/event-1.png"}
              className={"size-full object-cover rounded-3xl"}
              alt={"Category"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div className={"w-full h-78 border-4 border-[#F2F2F2] rounded-3xl"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/home/event-1.png"}
              className={"size-full object-cover rounded-3xl"}
              alt={"Category"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div
          className={
            "hidden xl:block w-full h-78 border-4 border-[#F2F2F2] rounded-3xl"
          }
        >
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/home/event-1.png"}
              className={"size-full object-cover rounded-3xl"}
              alt={"Category"}
              width={208}
              height={270}
            />
          </Link>
        </div>
      </div>

      <div className={"block lg:hidden"}>
        <Carousel className={"mx-auto"}>
          <CarouselContent>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/home/event-1.png"}
                  className={
                    "size-full object-cover border-4 border-[#F2F2F2] rounded-3xl"
                  }
                  alt={"Category"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/home/event-1.png"}
                  className={
                    "size-full object-cover border-4 border-[#F2F2F2] rounded-3xl"
                  }
                  alt={"Category"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/home/event-1.png"}
                  className={
                    "size-full object-cover border-4 border-[#F2F2F2] rounded-3xl"
                  }
                  alt={"Category"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/home/event-1.png"}
                  className={
                    "size-full object-cover border-4 border-[#F2F2F2] rounded-3xl"
                  }
                  alt={"Category"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";

export const ProductsList: FC = () => {
  return (
    <div>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className={"relative h-52 lg:h-74"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/shop/product-1.jpg"}
              className={
                "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
              }
              alt={"Product"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div className={"relative h-52 lg:h-74"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/shop/product-2.jpg"}
              className={
                "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
              }
              alt={"Product"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div className={"relative h-52 lg:h-74"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/shop/product-2.jpg"}
              className={
                "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
              }
              alt={"Product"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div className={"relative h-52 lg:h-74"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/shop/product-1.jpg"}
              className={
                "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
              }
              alt={"Product"}
              width={208}
              height={270}
            />
          </Link>
        </div>
        <div className={"relative h-52 lg:h-74"}>
          <Link href={"/shop/slug"} className={"block size-full"}>
            <Image
              src={"/images/shop/product-1.jpg"}
              className={
                "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
              }
              alt={"Product"}
              width={208}
              height={270}
            />
          </Link>
        </div>
      </div>
      <div className={"block md:hidden"}>
        <Carousel className={"mx-auto"}>
          <CarouselContent>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/shop/product-2.jpg"}
                  className={
                    "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
                  }
                  alt={"Product"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/shop/product-2.jpg"}
                  className={
                    "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
                  }
                  alt={"Product"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/shop/product-2.jpg"}
                  className={
                    "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
                  }
                  alt={"Product"}
                  width={208}
                  height={270}
                />
              </Link>
            </CarouselItem>
            <CarouselItem className={"max-w-56 h-64  rounded-3xl"}>
              <Link href={"/shop/slug"} className={"block size-full"}>
                <Image
                  src={"/images/shop/product-2.jpg"}
                  className={
                    "size-full object-cover border-2 border-[#D9D9D9] rounded-3xl"
                  }
                  alt={"Product"}
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

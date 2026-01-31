import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze } from "@/lib/fonts";

export const Techlab: FC = () => {
  return (
    <div className={"h-72 lg:h-128 relative"}>
      <Image
        src={"/images/home/tech-lab.png"}
        alt={"tech lab"}
        width={1000}
        height={300}
        className={
          "object-cover w-full absolute h-72 lg:h-128 rounded-2xl z-10"
        }
      />
      <div
        className={
          "z-20 relative text-center max-w-sm mx-auto top-10 lg:top-64 space-y-6"
        }
      >
        <h2
          className={`${madeSoulmaze.className} text-white text-2xl md:text-3xl xl:text-4xl uppercase`}
        >
          Creative <br /> <span className="text-yellow-300">Tech Lab</span> for{" "}
          <br />
          the Future
        </h2>
        <div className="flex gap-4 flex-col md:flex-row p-3">
          <Button size={"lg"} variant={"secondary"}>
            Join the community
          </Button>
          <Button
            size={"lg"}
            className={"text-white border-white"}
            variant={"outline"}
          >
            Partner with Ripple
          </Button>
        </div>
      </div>
    </div>
  );
};

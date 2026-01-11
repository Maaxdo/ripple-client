import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/form/input";
import { madeSoulmaze } from "@/lib/fonts";

export const Newsletter: FC = () => {
  return (
    <div className={"my-3  py-8 relative"}>
      <Image
        src={"/images/home/newsletter.png"}
        alt={"Hero 2"}
        width={185}
        height={195}
        className={
          "w-32 md:w-56 absolute left-20 md:left-44 lg:left-72 xl:left-80 top-0"
        }
      />
      <div className={"max-w-sm mx-auto text-center space-y-6"}>
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          join our <br /> <span className="text-secondary">newsletter</span>
        </h2>
        <p className={"text-[#535862] font-medium"}>
          Get updates on programs, events, opportunities, and insights delivered
          straight to your inbox.
        </p>
        <form className={"flex relative"}>
          <Input
            className={"w-full h-11 rounded-full border-gray-300"}
            placeholder={"Enter your email"}
          />
          <Button className={"absolute right-0 h-11"} size={"lg"}>
            Join
          </Button>
        </form>
      </div>
    </div>
  );
};

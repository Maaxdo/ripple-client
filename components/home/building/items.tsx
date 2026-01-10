import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { madeSoulmaze } from "@/lib/fonts";

type BuildingItemProps = PropsWithChildren<{
  title: string;
  image: string;
}>;

export const BuildingItems: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      <BuildingItem title={"LEARN"} image={"/images/home/building-1.png"}>
        Structured programs, courses, and labs designed to help you break into
        creative AI and tech.
      </BuildingItem>
      <BuildingItem title={"Experience"} image={"/images/home/building-2.png"}>
        Events, galleries, masterclasses, and immersive experiences that connect
        learning with culture.
      </BuildingItem>{" "}
      <BuildingItem title={"Create"} image={"/images/home/building-3.png"}>
        A space to build, experiment, showcase work, and collaborate with others
        across the world.
      </BuildingItem>{" "}
      <BuildingItem title={"Connect"} image={"/images/home/building-4.png"}>
        A growing community of creatives, technologists, leaders, and partners.
      </BuildingItem>
    </div>
  );
};

const BuildingItem: FC<BuildingItemProps> = ({ title, image, children }) => {
  return (
    <div
      className={
        "bg-[#2C2C2C] rounded-4xl p-6 space-y-4 overflow-hidden flex flex-col justify-between"
      }
    >
      <div className="space-y-3">
        <h3
          className={`${madeSoulmaze.className} text-white text-xl md:text-3xl uppercase`}
        >
          {title}
        </h3>
        <p className={"text-white text-xs md:text-sm lg:text-base"}>
          {children}
        </p>
      </div>
      <div className={"flex justify-end"}>
        <Image
          src={image}
          alt={"Learn"}
          width={255}
          height={200}
          className={"object-cover w-36 md:w-48 translate-x-4 translate-y-8"}
        />
      </div>
    </div>
  );
};

import { GraduationCap, Rocket } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { HandGift } from "@/components/common/icons/hand-gift";
import { People } from "@/components/common/icons/people";
import { madeSoulmaze } from "@/lib/fonts";

export const Partner: FC = () => {
  return (
    <div
      className={
        "px-4 md:px-16 lg:px-24 xl:px-32 py-16 bg-black rounded-2xl relative space-y-12"
      }
    >
      <Container
        className={
          " lg:max-w-7xl xl:max-w-6xl flex flex-col lg:flex-row space-y-10 lg:space-x-10"
        }
      >
        <div className="lg:w-1/2 space-y-6">
          <h2
            className={`${madeSoulmaze.className} text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
          >
            <span className={"text-[#F4EE25]"}>Partner or </span> <br />
            <span className={"text-[#F4EE25]"}>host</span> an Event With Ripple
          </h2>
          <p className={"text-[#F5F3F0B2] text-xs md:text-sm lg:text-base"}>
            Ripple collaborates with brands, organizations, and creators to
            produce meaningful events that educate, inspire, and connect
            communities.
          </p>
          <div>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>Start Course</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-8/12 md:mx-auto lg:w-1/2 grid grid-cols-2 gap-3">
          <Item
            title={"Brand-sponsored events"}
            icon={<HandGift size={36} />}
          />
          <Item
            title={"Campus or ecosystem partnerships"}
            icon={<GraduationCap className={"stroke-[1.5]"} size={36} />}
          />
          <Item title={"Community-led sessions"} icon={<People size={36} />} />
          <Item
            title={"Product launches"}
            icon={<Rocket className={"stroke-[1.5]"} size={36} />}
          />
        </div>
      </Container>
    </div>
  );
};

type ItemProps = {
  title: string;
  icon: ReactNode;
};

const Item: FC<ItemProps> = ({ icon, title }) => {
  return (
    <div className={"bg-[#FFFFFF1F] space-y-3 h-38 rounded-3xl p-6"}>
      <div className={"text-white"}>{icon}</div>
      <h4
        className={
          "text-white font-semibold text-sm lg:text-base xl:text-lg xl:w-11/12"
        }
      >
        {title}
      </h4>
    </div>
  );
};

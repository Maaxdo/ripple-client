import { Check } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { instrumentSans, madeSoulmaze } from "@/lib/fonts";

export const LearnSkills: FC = () => {
  return (
    <section className={"space-y-12"}>
      <Container className={"max-w-md lg:max-w-7xl space-y-7"}>
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          what you&apos;ll <span className={"text-secondary"}>learn</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Item>
            Short sentences about what will be learned in this course. Short
            sentences about what will
          </Item>
          <Item>
            Short sentences about what will be learned in this course. Short
            sentences about what will
          </Item>
          <Item>
            Short sentences about what will be learned in this course. Short
            sentences about what will
          </Item>
        </div>
      </Container>
      <Container className={"max-w-md lg:max-w-7xl space-y-7"}>
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          skills you&apos;ll <span className={"text-secondary"}>gain</span>
        </h2>
        <div className="flex flex-wrap gap-3 max-w-2xl">
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill to be earned</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill here</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill here</ItemButton>
          <ItemButton>Skill to be earned</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill here</ItemButton>
          <ItemButton>Skill</ItemButton>
          <ItemButton>Skill here</ItemButton>
        </div>
      </Container>
    </section>
  );
};

const ItemButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Button variant={"ghost"} className={"bg-[#F8F8DB] text-xs md:text-sm"}>
      {children}
    </Button>
  );
};

const Item: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"flex space-x-4 p-5 rounded-xl bg-[#F8F8DB]"}>
      <div>
        <Check />
      </div>
      <div>
        <p
          className={`${instrumentSans.className} font-medium text-xs md:text-sm lg:text-base`}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown";

import { Search } from "@/components/common/search";
import { madeSoulmaze } from "@/lib/fonts";
import { Events } from "./events";

export const UpcomingEvents: FC = () => {
  return (
    <section
      className={
        "pt-7 pb-3 px-4 rounded-2xl relative overflow-hidden bg-white space-y-16"
      }
    >
      <Container className={"space-y-8 max-w-2xl"}>
        <h2
          className={`text-center ${madeSoulmaze.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          Skills to transform <br /> your life and{" "}
          <span className={"text-secondary"}>career</span>
        </h2>
        <Search placeholder={"Search for events"} />
        <EventsFilter />
      </Container>
      <Container>
        <Events />
      </Container>
    </section>
  );
};

export const EventsFilter: FC = () => {
  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-4 flex-wrap"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Category</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Format</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Access</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Location</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Date</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

import { Globe } from "lucide-react";
import { FC } from "react";
import { Container } from "@/components/common/container";

export const Trusted: FC = () => {
  return (
    <section className={"py-8"}>
      <Container className={"space-y-5"}>
        <div className={"flex justify-center"}>
          <Globe className={"size-14"} />
        </div>
        <p className="text-center max-w-xs md:max-w-sm mx-auto text-base md:text-lg lg:text-xl">
          Trusted by creatives, professionals & students across the world
        </p>
      </Container>
    </section>
  );
};

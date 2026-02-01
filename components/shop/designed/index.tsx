import { FC } from "react";
import { Container } from "@/components/common/container";
import { madeSoulmaze } from "@/lib/fonts";

export const Designed: FC = () => {
  return (
    <section className={"p-4 md:p-16 space-y-12"}>
      <Container className={"rounded-2xl p-6 md:p-16 space-y-8"}>
        <div className="space-y-4 mx-auto max-w-2xl">
          <h2
            className={`text-center text-2xl md:text-3xl lg:text-4xl ${madeSoulmaze.className}`}
          >
            designed with <span className={"text-secondary"}>purpose</span>
          </h2>
          <p className="text-center text-xs md:text-sm lg:text-base text-[#4E4E4E]">
            Every item in the Ripple Shop is created or curated with
            intention—built to be useful, thoughtful, and aligned with how
            creatives and technologists actually work.
          </p>
        </div>
      </Container>
    </section>
  );
};

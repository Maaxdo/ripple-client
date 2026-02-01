import { Check } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  InfoBlock,
  InfoList,
  InfoListItem,
  InfoSeparator,
} from "@/components/jobs/job-info";
import { creatoDisplay, manRope } from "@/lib/fonts";

export const ProductInfo: FC = () => {
  return (
    <section className={"bg-white"}>
      <Container className={"max-w-md lg:max-w-7xl py-8 gap-8"}>
        <InfoBlock title={"About This Product"}>
          <p>
            This toolkit is designed to help creatives and technologists
            structure ideas, plan projects, and move from concept to execution
            with clarity and confidence.
          </p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"What You'll Get"}>
          <InfoList>
            <InfoListItem>Downloadable files or physical item</InfoListItem>
            <InfoListItem>
              Supporting guides or instructions (if applicable)
            </InfoListItem>
            <InfoListItem>Lifetime access (for digital products)</InfoListItem>
            <InfoListItem>Updates (if applicable)</InfoListItem>
          </InfoList>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"Who This Is For"}>
          <InfoList>
            <InfoListItem>Downloadable files or physical item</InfoListItem>
            <InfoListItem>
              Supporting guides or instructions (if applicable)
            </InfoListItem>
            <InfoListItem>Lifetime access (for digital products)</InfoListItem>
            <InfoListItem>Updates (if applicable)</InfoListItem>
          </InfoList>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"How to Use This Product"}>
          <p>
            Short guidance on how the product fits into a workflow or daily
            practice.
          </p>
        </InfoBlock>
        <InfoSeparator />
        <InfoBlock title={"Access & Delivery"}>
          <InfoList>
            <InfoListItem>Downloadable files or physical item</InfoListItem>
            <InfoListItem>
              Supporting guides or instructions (if applicable)
            </InfoListItem>
            <InfoListItem>Lifetime access (for digital products)</InfoListItem>
          </InfoList>
        </InfoBlock>
      </Container>
      <div className={"bg-black  rounded-b-3xl"}>
        <Container
          className={
            "max-w-md lg:max-w-7xl flex gap-4 items-center justify-between py-3"
          }
        >
          <div className="flex items-center space-x-3 md:space-x-5">
            <h3
              className={`${creatoDisplay.className} text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white`}
            >
              $25
            </h3>
            <Button className={"bg-white text-black"}>Buy now</Button>
          </div>
          <p
            className={`text-[#A9A9A9] ${manRope.className} font-medium text-xs md:text-xl`}
          >
            Secure checkout. Instant access for digital products.
          </p>
        </Container>
      </div>
    </section>
  );
};

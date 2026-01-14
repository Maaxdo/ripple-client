import { Check } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { Container } from "@/components/common/container";
import { creatoDisplay } from "@/lib/fonts";

export const JobInfo: FC = () => {
  return (
    <section className={"bg-white"}>
      <Container className={"max-w-md lg:max-w-7xl py-8 gap-8"}>
        <InfoBlock title={"About the company"}>
          <p>
            Our mission is simple: we want to set people free to do meaningful
            work. People love our software—and it turns out that people love
            working here too. We&apos;ve been recognized as a &#34;Best Company
            to Work For” and we&apos;re proud of our team for creating software
            that makes an impact in the lives of HR pros and employees all over
            the world.
          </p>
        </InfoBlock>
        <InfoSeperator />
        <InfoBlock title={"What you’ll do"}>
          <p>
            Our ideal Software Engineer will be an integral contributor to the
            current and next generation of our APP. You&apos;ll be working on
            multiple projects to continue making us the xxx. If you get a kick
            out of solving problems and building beautiful world-class software.
          </p>
        </InfoBlock>
        <InfoSeperator />
        <InfoBlock title={"What you’ll need to get the job done"}>
          <ul className={"text-sm md:text-base space-y-3"}>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
          </ul>
        </InfoBlock>
        <InfoSeperator />
        <InfoBlock title={"Benefits"}>
          <ul className={"text-sm md:text-base space-y-3"}>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
            <li className={"flex items-center gap-5"}>
              <Check className={"stroke-1"} />
              <span>3+ years of experience in web development</span>
            </li>
          </ul>
        </InfoBlock>
      </Container>
    </section>
  );
};

type InfoBlockProps = PropsWithChildren<{
  title: string;
}>;

const InfoSeperator: FC = () => (
  <div className={"h-[0.05rem] bg-gray-200 my-8"}></div>
);
const InfoBlock: FC<InfoBlockProps> = ({ title, children }) => {
  return (
    <div className={"space-y-4"}>
      <h3
        className={`text-base md:text-xl font-bold ${creatoDisplay.className}`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};

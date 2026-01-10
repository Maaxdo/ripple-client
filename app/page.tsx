import { Building } from "@/components/home/building";
import { HeadSection } from "@/components/home/head-section";
import { Trusted } from "@/components/home/trusted";
import { madeSoulmaze } from "@/lib/fonts";

export default function Home() {
  return (
    <>
      <HeadSection />
      <Trusted />
      <Building />
    </>
  );
}

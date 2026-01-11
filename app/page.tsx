import { Footer } from "@/components/common/footer";
import { Building } from "@/components/home/building";
import { Explore } from "@/components/home/explore";
import { HeadSection } from "@/components/home/head-section";
import { Newsletter } from "@/components/home/newsletter";
import { Techlab } from "@/components/home/techlab";
import { Trusted } from "@/components/home/trusted";
import { madeSoulmaze } from "@/lib/fonts";

export default function Home() {
  return (
    <>
      <HeadSection />
      <Trusted />
      <Building />
      <Explore />
      <Newsletter />
      <div
        className={
          "py-6 px-4 md:py-20 md:px-16 bg-black rounded-2xl relative h-max space-y-12"
        }
      >
        <Techlab />
        <Footer />
      </div>
    </>
  );
}

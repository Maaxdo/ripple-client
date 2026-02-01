import Link from "next/link";
import { FC } from "react";
import { Container } from "@/components/common/container";
import { CategoriesList } from "@/components/shop/categories/categories-list";
import { ProductsList } from "@/components/shop/categories/products-list";
import { madeSoulmaze } from "@/lib/fonts";

export const Categories: FC = () => {
  return (
    <section
      className={"rounded-2xl p-4 md:p-16 bg-[#F5F5CA] space-y-12 mb-26"}
    >
      <Container className={"rounded-2xl p-6 md:p-16 bg-white space-y-8"}>
        <div className="space-y-4">
          <h2
            className={`text-center text-2xl md:text-3xl lg:text-4xl ${madeSoulmaze.className}`}
          >
            product <span className={"text-secondary"}>categories</span>
          </h2>
          <p className="text-center text-xs md:text-sm lg:text-base text-[#4E4E4E]">
            What You&apos;ll Find in the Ripple Shop
          </p>
        </div>
        <CategoriesList />
      </Container>

      <Container
        className={
          "rounded-2xl p-6 md:p-16 bg-white space-y-8 translate-y-20 md:translate-y-40"
        }
      >
        <div className="space-y-4 mx-auto max-w-lg">
          <h2
            className={`text-center text-2xl md:text-3xl lg:text-4xl ${madeSoulmaze.className}`}
          >
            featured <span className={"text-secondary"}>products</span>
          </h2>
          <p className="text-center text-xs md:text-sm lg:text-base text-[#4E4E4E]">
            A selection of resources and merchandise from the Ripple
            ecosystem—chosen for their usefulness, relevance, and design.
          </p>
          <div className={"flex justify-center"}>
            <Link href={""} className={"text-green-600 text-xs md:text-sm"}>
              See all
            </Link>
          </div>
        </div>
        <ProductsList />
      </Container>
    </section>
  );
};

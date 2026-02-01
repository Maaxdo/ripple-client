import { FC } from "react";
import { Button } from "@/components/common/button";
import { madeSoulmaze } from "@/lib/fonts";

export const Questions: FC = () => {
  return (
    <div className={"my-3 bg-[#FFE0D6] py-8 relative rounded-3xl"}>
      <div className={"max-w-lg mx-auto text-center space-y-4 md:space-y-6"}>
        <h2
          className={`${madeSoulmaze.className} text-black text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          have questions about{" "}
          <span className="text-secondary">this product?</span>
        </h2>
        <p className={"text-[#616161] font-medium mx-auto text-sm w-8/12"}>
          Reach out to our team and we’ll help you out.
        </p>
        <div className="flex justify-center">
          <Button>Contact support</Button>
        </div>
      </div>
    </div>
  );
};

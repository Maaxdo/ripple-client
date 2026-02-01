import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/common/header";

export const HeadSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "pt-7 px-4 md:px-16 lg:px-24 xl:px-32 bg-black rounded-2xl relative space-y-12 overflow-hidden"
      }
    >
      <div className={"mx-auto space-y-12"}>
        <Header />
      </div>
      {children}
    </div>
  );
};

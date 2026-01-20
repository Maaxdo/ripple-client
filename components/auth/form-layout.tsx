import { FC, PropsWithChildren } from "react";
import { Button } from "@/components/common/button";
import { Google } from "@/components/common/icons/google";

type FormLayoutProps = PropsWithChildren<{
  title: string;
  googleText: string;
}>;
export const FormLayout: FC<FormLayoutProps> = ({
  googleText,
  title,
  children,
}) => {
  return (
    <div className={"space-y-10"}>
      <h2
        className={"text-lg md:text-xl lg:text-2xl text-center font-semibold"}
      >
        {title}
      </h2>
      <div className="space-y-4">
        <div>
          <Button
            className={"border-[#D5D7DA] rounded-lg w-full font-semibold"}
            variant={"outline"}
            size={"lg"}
          >
            <Google />
            <span>{googleText}</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className={"bg-[#E9EAEB] h-[0.09rem] w-full"}></div>
          <span className={"text-sm text-[#717680]"}>or</span>
          <div className={"bg-[#E9EAEB] h-[0.09rem] w-full"}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

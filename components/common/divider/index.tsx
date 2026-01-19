import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

type DividerProps = ComponentProps<"div">;
export const Divider: FC<DividerProps> = ({ className, ...restProps }) => {
  const c = cn("h-[0.09rem] bg-[#FFFFFF3B]", className);
  return <div className={c} {...restProps} />;
};

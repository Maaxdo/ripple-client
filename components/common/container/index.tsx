import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export const Container: FC<ContainerProps> = ({ className, ...restProps }) => {
  const c = cn("container mx-auto px-4", className);

  return <div className={c} {...restProps} />;
};

import { TriangleAlert } from "lucide-react";
import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

type ErrorProps = ComponentProps<"small">;

export const ErrorText: FC<ErrorProps> = ({
  children,
  className,
  ...restProps
}) => {
  const c = cn("text-red-500 flex items-center space-x-2", className);
  return (
    <small className={c} {...restProps}>
      <TriangleAlert className="size-4" />
      <span>{children}</span>
    </small>
  );
};

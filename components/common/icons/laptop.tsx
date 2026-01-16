import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Laptop: FC<IconProps> = ({
  className,
  size = 18,
  ...restProps
}) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M3.00001 1H19V11H3.00001V1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.00001 11L1.00001 17.5H21L19 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.95001 14.5H13.05L14 17.5H8.00001L8.95001 14.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Play: FC<IconProps> = ({ className, size = 18, ...restProps }) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M11 0C4.93423 0 0 4.9347 0 11C0 17.0653 4.93423 22 11 22C17.0658 22 22 17.0653 22 11C22 4.9347 17.0658 0 11 0ZM15.373 11.3854L8.95632 15.5104C8.88113 15.5592 8.79429 15.5833 8.70835 15.5833C8.63315 15.5833 8.55705 15.5645 8.48904 15.5274C8.34131 15.4468 8.25 15.2928 8.25 15.125V6.875C8.25 6.70716 8.34131 6.55316 8.48904 6.4726C8.63406 6.39293 8.81577 6.39783 8.95632 6.48961L15.373 10.6146C15.5037 10.6987 15.5833 10.8442 15.5833 11C15.5833 11.1558 15.5037 11.3012 15.373 11.3854Z"
        fill="currentColor"
      />
    </svg>
  );
};

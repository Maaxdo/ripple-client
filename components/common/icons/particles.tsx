import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Particles: FC<IconProps> = ({
  className,
  size = 18,
  ...restProps
}) => {
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
        d="M3.75 14.75L8.75 11.75M12.75 9.75L17.75 6.75M10.75 3.75V8.75M10.75 12.75V17.75M3.75 6.75L8.75 9.75M12.75 11.75L17.75 14.75M19.25 7.75V13.25M12.25 19.25L17.75 16.25M3.25 16.25L9.25 19.25M2.25 13.75V7.75M3.25 5.25L9.25 2.25M18.25 5.25L12.25 2.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.75 3.75C11.5784 3.75 12.25 3.07843 12.25 2.25C12.25 1.42157 11.5784 0.75 10.75 0.75C9.92157 0.75 9.25 1.42157 9.25 2.25C9.25 3.07843 9.92157 3.75 10.75 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.75 20.75C11.5784 20.75 12.25 20.0784 12.25 19.25C12.25 18.4216 11.5784 17.75 10.75 17.75C9.92157 17.75 9.25 18.4216 9.25 19.25C9.25 20.0784 9.92157 20.75 10.75 20.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 7.75C3.07843 7.75 3.75 7.07843 3.75 6.25C3.75 5.42157 3.07843 4.75 2.25 4.75C1.42157 4.75 0.75 5.42157 0.75 6.25C0.75 7.07843 1.42157 7.75 2.25 7.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 7.75C20.0784 7.75 20.75 7.07843 20.75 6.25C20.75 5.42157 20.0784 4.75 19.25 4.75C18.4216 4.75 17.75 5.42157 17.75 6.25C17.75 7.07843 18.4216 7.75 19.25 7.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 16.75C20.0784 16.75 20.75 16.0784 20.75 15.25C20.75 14.4216 20.0784 13.75 19.25 13.75C18.4216 13.75 17.75 14.4216 17.75 15.25C17.75 16.0784 18.4216 16.75 19.25 16.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 16.75C3.07843 16.75 3.75 16.0784 3.75 15.25C3.75 14.4216 3.07843 13.75 2.25 13.75C1.42157 13.75 0.75 14.4216 0.75 15.25C0.75 16.0784 1.42157 16.75 2.25 16.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.75 8.5L12.75 9.625V11.875L10.75 13L8.75 11.875V9.625L10.75 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

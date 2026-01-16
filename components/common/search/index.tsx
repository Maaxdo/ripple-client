import { Search as SearchIcon } from "lucide-react";
import { ComponentPropsWithoutRef, FC } from "react";
import { Input } from "@/components/common/form/input";
import { cn } from "@/lib/utils";

type SearchProps = ComponentPropsWithoutRef<"input"> & {
  inputClassName?: string;
};

export const Search: FC<SearchProps> = ({
  className,
  inputClassName,
  ...props
}) => {
  const c = cn("w-full flex justify-center relative", className);
  const inputC = cn(
    "w-full rounded-full h-12 bg-[#F5F5F5] text-xs md:text-sm border-transparent pr-12",
    inputClassName,
  );
  return (
    <div className={c}>
      <Input className={inputC} {...props} />
      <SearchIcon
        className={"stroke-1 absolute size-4 top-1/3 right-4 md:right-6"}
      />
    </div>
  );
};

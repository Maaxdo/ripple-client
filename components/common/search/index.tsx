"use client";

import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, ComponentPropsWithoutRef, FC, useState } from "react";
import { Input } from "@/components/common/form/input";
import { cn, debounce } from "@/lib/utils";

type SearchProps = ComponentPropsWithoutRef<"input"> & {
  inputClassName?: string;
};

export const Search: FC<SearchProps> = ({
  className,
  inputClassName,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const c = cn("w-full flex justify-center relative", className);
  const inputC = cn(
    "w-full rounded-full h-12 bg-[#F5F5F5] text-xs md:text-sm border-transparent pr-12",
    inputClassName,
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debounce(() => {
      router.push(`?search=${e.target.value}`, {
        scroll: false,
      });
    }, 300)();
  };

  return (
    <div className={c}>
      <Input
        value={searchValue}
        onChange={handleSearch}
        type={"search"}
        className={inputC}
        {...props}
      />
      <SearchIcon
        className={"stroke-1 absolute size-4 top-1/3 right-4 md:right-6"}
      />
    </div>
  );
};

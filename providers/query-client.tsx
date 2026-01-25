"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { queryClient } from "@/lib/utils";

export const ReactQueryClientProvider: FC<PropsWithChildren> = (props) => {
  return <QueryClientProvider client={queryClient} {...props} />;
};

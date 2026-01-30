"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, use } from "react";
import { useAuth } from "@/hooks/auth";

export const AuthCheck: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  if (user.isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Loader className="animate-spin size-20 text-secondary" />
      </div>
    );
  }

  if (user.isError) {
    router.push("/signin");
    return null;
  }

  if (!user.data) return null;

  return <>{children}</>;
};

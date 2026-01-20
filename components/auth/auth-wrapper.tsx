import { FC, PropsWithChildren } from "react";
import { Container } from "@/components/common/container";

export const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full lg:w-5/12 grid place-items-center">
      <Container className={"max-w-sm pt-20 lg:p-0"}>{children}</Container>
    </div>
  );
};

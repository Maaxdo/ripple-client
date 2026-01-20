"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";

export const EmailConfirmed: FC = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="w-full lg:w-5/12 grid place-items-center relative">
      <Confetti width={width} height={height} className={"absolute top-0"} />
      <Container className={"max-w-sm pt-20 lg:p-0"}>
        <div className="space-y-6">
          <div className={"flex justify-center"}>
            <Image
              src={"/images/auth/success.png"}
              alt={"Success"}
              width={150}
              height={150}
              className={"w-40"}
            />
          </div>
          <div className={"text-center space-y-2"}>
            <h2 className={"text-lg md:text-xl lg:text-2xl font-semibold"}>
              You’re all set!
            </h2>
            <p className={"text-gray-600 text-xs md:text-sm"}>
              Your account has been successfully created.  Login to proceed to
              your Ripple dashboard
            </p>
          </div>
          <div className={"space-y-4 flex justify-center"}>
            <Button
              asChild
              size={"lg"}
              className={"mx-auto w-10/12 rounded-lg"}
            >
              <Link href={"/signin"}>Login</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

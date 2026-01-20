"use client";

import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import { FormField } from "@/components/common/form/form-field";
import { useToggle } from "@/hooks/common/toggle";

export const Signin: FC = () => {
  const { toggle: showPassword, handleToggle } = useToggle();
  return (
    <form action="" className={"space-y-4"}>
      <FormField iconLeft={<Mail size={18} />} label={"Email"} type={"email"} />
      <div className={"space-y-1"}>
        <FormField
          iconLeft={<Lock size={18} />}
          iconRight={
            showPassword ? (
              <button type={"button"} onClick={handleToggle}>
                <EyeClosed size={18} />
              </button>
            ) : (
              <button type={"button"} onClick={handleToggle}>
                <Eye size={18} />
              </button>
            )
          }
          label={"Password"}
          type={showPassword ? "text" : "password"}
        />
        <div className="flex justify-end text-[#DE03B5]">
          <Link href={"/forgot-password"} className={"text-xs"}>
            Forgot password?
          </Link>
        </div>
      </div>
      <div>
        <Button className={"font-bold rounded-lg w-full"} size={"lg"}>
          Sign in
        </Button>
      </div>
      <p className="text-center font-medium text-xs text-[#535862]">
        By signing in, you agree to our{" "}
        <Link href={"/"} className={"text-[#DE03B5]"}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/"} className={"text-[#DE03B5]"}>
          Privacy Policy.
        </Link>
      </p>
      <Divider className={"bg-[#E9EAEB]"} />
      <p
        className={
          "text-[#535862] text-center text-sm md:text-base font-medium"
        }
      >
        No account?{" "}
        <Link className={"text-[#DE03B5]"} href={"/signup"}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

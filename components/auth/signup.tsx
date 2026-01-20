"use client";

import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import {
  FormCheckBoxField,
  FormField,
} from "@/components/common/form/form-field";
import { useToggle } from "@/hooks/common/toggle";

export const SignUp: FC = () => {
  const { toggle: showPassword, handleToggle } = useToggle();
  return (
    <form action="/confirm-email" className={"space-y-4"}>
      <FormField iconLeft={<User size={18} />} label={"Full name"} />
      <FormField
        iconLeft={<Mail size={18} />}
        label={"Email"}
        type={"email"}
        placeholder={"name@email.com"}
      />
      <FormCheckBoxField
        label={"I agree to receive marketing emails, and offerings"}
      />
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
      <FormCheckBoxField label={"I confirm that I am at least 18 years old."} />
      <div>
        <Button className={"font-bold rounded-lg w-full"} size={"lg"}>
          Sign up
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
        Already have an account?{" "}
        <Link className={"text-[#DE03B5]"} href={"/signin"}>
          Sign in
        </Link>
      </p>
    </form>
  );
};

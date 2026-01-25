"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import {
  FormCheckBoxField,
  FormField,
} from "@/components/common/form/form-field";
import { signUp } from "@/helpers/auth";
import { useToggle } from "@/hooks/common/toggle";
import { errorParser } from "@/lib/utils";
import { SignUpSchema, SignUpSchemaType } from "@/schema/auth";

export const SignUp: FC = () => {
  const { toggle: showPassword, handleToggle } = useToggle();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      emailSubscription: false,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess() {
      toast.success("Signed up successfully, you will be redirected shortly");
      window.location.href = "/confirm-email";
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-4"}>
      <FormField
        iconLeft={<User size={18} />}
        label={"Full name"}
        {...register("fullName")}
      />
      <FormField
        iconLeft={<Mail size={18} />}
        label={"Email"}
        type={"email"}
        placeholder={"name@email.com"}
        {...register("email")}
      />
      <FormCheckBoxField
        label={"I agree to receive marketing emails, and offerings"}
        onCheckedChange={(value) => {
          setValue(
            "emailSubscription",
            typeof value === "boolean" ? value : false,
          );
          clearErrors("emailSubscription");
        }}
      />
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
        {...register("password")}
      />
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
        label={"Confirm password"}
        type={showPassword ? "text" : "password"}
        {...register("confirmPassword")}
      />
      <FormCheckBoxField
        onCheckedChange={(value) => {
          setValue(
            "ageConfirmation",
            typeof value === "boolean" ? value : false,
          );
          clearErrors("ageConfirmation");
        }}
        error={errors.ageConfirmation?.message}
        label={"I confirm that I am at least 18 years old."}
      />
      <div>
        <Button
          disabled={isPending}
          className={"font-bold rounded-lg w-full"}
          size={"lg"}
        >
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

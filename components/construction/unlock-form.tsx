"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { unlockSite } from "@/helpers/auth";
import { env } from "@/lib/env";
import { madeSoulmaze } from "@/lib/fonts";
import { errorParser } from "@/lib/utils";
import { UnlockSiteSchema, UnlockSiteSchemaType } from "@/schema/auth";
import { Button } from "../common/button";
import { FormField } from "../common/form/form-field";

export const UnlockForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UnlockSiteSchemaType>({
    resolver: zodResolver(UnlockSiteSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: unlockSite,
    onSuccess() {
      toast.success(
        "Site unlocked successfully. You will be redirected shortly.",
      );
      window.location.href = "/";
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-lg rounded-3xl p-6 w-sm space-y-4"
    >
      <div className="flex justify-center">
        <Image
          src={"/images/logo-purple.png"}
          unoptimized
          className={"w-16 md:w-24"}
          alt={env.app.name ?? "Logo"}
          width={112}
          height={40}
        />
      </div>
      <h2 className={`text-center ${madeSoulmaze.className} `}>Unlock Site</h2>
      <FormField
        label="Password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button disabled={isPending} size={"xl"} className="w-full">
        Submit
      </Button>
    </form>
  );
};

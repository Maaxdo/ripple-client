"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { ErrorText } from "@/components/common/form/error-text";
import { Input } from "@/components/common/form/input";
import { subscribeToNewsletter } from "@/helpers/newsletter";
import { madeSoulmaze } from "@/lib/fonts";
import { errorParser } from "@/lib/utils";
import { NewsletterSchema, NewsletterSchemaType } from "@/schema/newsletter";

export const Newsletter: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewsletterSchemaType>({
    resolver: zodResolver(NewsletterSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: subscribeToNewsletter,
    onSuccess() {
      toast.success("Subscribed to our mailing list successfully");
      reset();
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className={"my-3 bg-[#FEE9FF] py-12 relative rounded-3xl"}>
      <Image
        src={"/images/jobs/hero-2.png"}
        alt={"Hero 2"}
        width={185}
        height={195}
        className={"hidden lg:block w-24 xl:w-44 absolute right-1/6 bottom-0"}
      />
      <div className={"max-w-sm mx-auto text-center space-y-6"}>
        <h2
          className={`${madeSoulmaze.className} text-black text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          stay connected <br /> to{" "}
          <span className="text-secondary">ripple insights</span>
        </h2>
        <p className={"text-black font-medium"}>
          Get new articles, podcast episodes, and curated insights delivered
          straight to your inbox.
        </p>
        <form onSubmit={onSubmit} className={"space-y-2"}>
          <div className={"flex relative"}>
            <Input
              className={"w-full h-11 rounded-full border-gray-300"}
              placeholder={"Enter your email"}
              type={"email"}
              {...register("email")}
            />
            <Button
              disabled={isPending}
              className={"absolute right-0 h-11 bg-secondary"}
              size={"lg"}
            >
              Subscribe
            </Button>
          </div>
          {errors.email?.message && (
            <ErrorText>{errors.email.message}</ErrorText>
          )}
        </form>
      </div>
    </div>
  );
};

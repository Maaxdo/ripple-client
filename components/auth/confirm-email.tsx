import { FC } from "react";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/common/form/input-otp";

export const ConfirmEmail: FC = () => {
  return (
    <form action={"/confirm-success"} className="space-y-6">
      <div className={"text-center space-y-2"}>
        <h2 className={"text-lg md:text-xl lg:text-2xl font-semibold"}>
          Confirm your email
        </h2>
        <p>
          We sent an OTP to{" "}
          <span className={"text-[#DE03B5] text-xs md:text-sm font-medium"}>
            danieladeeri@gmail.com
          </span>
        </p>
      </div>
      <div className={"space-y-4"}>
        <InputOTP maxLength={6} defaultValue="123456">
          <InputOTPGroup className={"flex justify-center w-full"}>
            <InputOTPSlot className={"border-[#D5D7DA] rounded-lg"} index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button size={"lg"} className={"block mx-auto w-10/12 rounded-lg"}>
          Confirm email
        </Button>
      </div>
      <Divider className={"bg-[#E9EAEB]"} />
      <p className="text-xs md:text-sm text-center">
        Didn’t get code?{" "}
        <button className={"text-[#DE03B5]"}>Resend in 27 seconds</button>
      </p>
    </form>
  );
};

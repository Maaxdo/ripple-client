import { Metadata } from "next";
import { EmailConfirmed } from "@/components/auth/email-confirmed";

export const metadata: Metadata = {
  title: "Email confirmed successfully",
};

export default function Page() {
  return <EmailConfirmed />;
}

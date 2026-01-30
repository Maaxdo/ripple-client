import { Metadata } from "next";
import { AuthCheck } from "@/components/auth/auth-check";
import { EmailConfirmed } from "@/components/auth/email-confirmed";

export const metadata: Metadata = {
  title: "Email confirmed successfully",
};

export default function Page() {
  return (
    <AuthCheck>
      <EmailConfirmed />
    </AuthCheck>
  );
}

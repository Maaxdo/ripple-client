import { Metadata } from "next";
import { AuthCheck } from "@/components/auth/auth-check";
import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { ConfirmEmail } from "@/components/auth/confirm-email";

export const metadata: Metadata = {
  title: "Confirm your email",
};

export default function Page() {
  return (
    <AuthCheck>
      <AuthWrapper>
        <div>
          <ConfirmEmail />
        </div>
      </AuthWrapper>
    </AuthCheck>
  );
}

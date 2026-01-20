import Image from "next/image";
import { Container } from "@/components/common/container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex max-h-screen p-4"}>
      <div className={"hidden lg:block w-7/12"}>
        <Image
          src={"/images/auth/banner.png"}
          alt={"auth"}
          width={1600}
          height={1550}
          className={"h-[95vh] rounded-3xl object-cover"}
        />
      </div>
      {children}
    </main>
  );
}

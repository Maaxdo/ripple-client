import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/common/footer";
import { Techlab } from "@/components/home/techlab";
import { env } from "@/lib/env";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${env.app.name} - Creative Tech Lab for the Future`,
    default: `${env.app.name} -  Creative Tech Lab for the Future`,
  },
  description:
    "Ripple Universe equips creatives, technologists, and innovators with the skills, community, and culture needed to thrive in AI and emerging tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

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
      <body className={`${inter.className} antialiased`}>
        <div className={"p-2 md:p-4"}>{children}</div>
        <div className="p-2">
          <div
            className={
              "py-6 px-4 md:py-20 md:px-16 bg-black rounded-2xl relative h-max space-y-12"
            }
          >
            <Techlab />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

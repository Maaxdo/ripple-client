import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const madeSoulmaze = localFont({
  variable: "--font-made-soulmaze",
  src: "./made-regular.otf",
  fallback: ["system-ui"],
});

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

export const creatoDisplay = localFont({
  variable: "--font-made-creatordisplay",
  src: [
    {
      path: "./CreatoDisplay-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./CreatoDisplay-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  fallback: ["system-ui"],
});

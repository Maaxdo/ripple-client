import { Footer } from "@/components/common/footer";
import { Techlab } from "@/components/home/techlab";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"bg-background"}>
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
    </main>
  );
}

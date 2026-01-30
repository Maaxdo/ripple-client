export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"bg-background"}>
      <div className="flex flex-col gap-4 md:gap-8 items-center justify-center min-h-screen p-8">
        {children}
      </div>
    </main>
  );
}

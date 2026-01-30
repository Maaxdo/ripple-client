import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/button";
import { env } from "@/lib/env";
import { madeSoulmaze, manRope } from "@/lib/fonts";

export default function Page() {
  return (
    <>
      <Image
        src={"/images/under-construction.svg"}
        width={300}
        height={300}
        alt="Under construction"
        className="w-64 md:w-96"
      />
      <h1
        className={`${madeSoulmaze.className} text-2xl md:text-3xl text-center`}
      >
        Site is under construction
      </h1>
      <p
        className={`${manRope.className} text-center max-w-md text-base md:text-lg`}
      >
        {env.app.name} is currently undergoing maintenance and construction.
        We&apos;ll be back soon.
      </p>
      <div>
        <Button size={"xl"} className="text-lg" asChild>
          <Link href={"/under-construction/unlock"}>Unlock site</Link>
        </Button>
      </div>
    </>
  );
}

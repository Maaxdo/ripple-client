import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";
import { creatoDisplay } from "@/lib/fonts";

export const Apply: FC = () => {
  return (
    <section className={"py-12 bg-white"}>
      <Container className={"max-w-lg lg:max-w-2xl mx-auto space-y-5"}>
        <h1
          className={`${creatoDisplay.className} font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center`}
        >
          Apply for this role
        </h1>
        <ApplyForm />
      </Container>
    </section>
  );
};

const ApplyForm: FC = () => {
  return (
    <form className={"space-y-4"}>
      <Input
        placeholder={"First name"}
        className={"w-full border-gray-300 h-12"}
      />
      <Input
        placeholder={"Last name"}
        className={"w-full border-gray-300 h-12"}
      />
      <Input
        placeholder={"Email"}
        type={"email"}
        className={"w-full border-gray-300 h-12"}
      />
      <Input
        placeholder={"Phone Number"}
        className={"w-full border-gray-300 h-12"}
      />
      <div className={"space-y-2"}>
        <Label>Resume/CV</Label>
        <div
          className={
            "w-full py-12 border-dashed border-2 rounded-2xl border-gray-300 flex flex-col items-center"
          }
        >
          <p className={"text-purple-700 text-xs md:text-sm lg:text-base"}>
            Attach, Dropbox or enter manually
          </p>
          <p className={"text-gray-400 text-xs md:text-sm lg:text-base"}>
            (File types: pdf, doc, docx, txt, rtf)
          </p>
        </div>
      </div>
      <Input
        placeholder={"Personal website link (optional)"}
        className={"w-full border-gray-300 h-12"}
      />
      <div className={"flex justify-center"}>
        <Button>Apply for Job</Button>
      </div>
    </form>
  );
};

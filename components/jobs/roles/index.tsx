import { FC } from "react";
import { Container } from "@/components/common/container";
import { Pagination } from "@/components/common/pagination";
import { Job } from "@/components/home/explore/jobs";

export const Roles: FC = () => {
  return (
    <section className={"py-12"}>
      <Container className={"max-w-7xl space-y-12"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
          <Job
            className={"border-[0.15rem] border-[#F2F2F2]"}
            title={"Senior Software Developer"}
            location={"Google"}
          />
        </div>
        {/* <Pagination /> */}
      </Container>
    </section>
  );
};

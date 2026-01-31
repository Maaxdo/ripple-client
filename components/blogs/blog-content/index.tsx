import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { creatoDisplay } from "@/lib/fonts";

export const BlogContent: FC = () => {
  return (
    <section className={"py-12 bg-white"}>
      <Container className={"max-w-3xl space-y-8"}>
        <div className={`space-y-12 ${creatoDisplay.className}`}>
          <h1 className={"text-3xl md:text-4xl lg:text-5xl font-medium"}>
            100 Best Worldwide Vacations to Enrich Your Life
          </h1>
          <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base lg:text-lg">
            <p>
              You may not come home from this eight-day workshop with a suitcase
              of paintings or a briefcase full of poems. But you will come back
              with a heart full of artistic passion, completely convinced that
              creativity and imagination–yours and everyone else’s–is the answer
              to just about any question the world could pose. Plus, you’ll have
              the tools to enable you to fill a whole cargo hold’s worth of
              luggage with paintings, poems, drawings, and essays.
            </p>
            <p>
              Playwright Shelley Berc and her husband, Alejandro Fogel, a
              painter and multi-media artist, launched The Creativity Workshop
              in 1993 to help people interested in the creative process to get
              “out of their own way.” They became convinced after many years in
              a university setting, that creativity often gets squelched by
              one’s own judgements and by a culture that has turned it into a
              commodity.
            </p>
          </div>
          <div className={"flex space-x-5"}>
            <div className={"w-8 rounded-xl bg-secondary min-h-40"} />
            <div>
              <p className={"font-bold italic text-base md:text-lg lg:text-xl"}>
                “Creativity, like so much else in our world, has been co-opted
                into consumerism, and its worth calculated by how much money it
                generates”, Berc says. “We live in a culture that doesn’t
                encourage adults to be creative unless it looks like they are
                going to make money at it. But without imagination, we would not
                have any great scientists, thinkers, or artists.”
              </p>
              ---
              <div className="flex items-center space-x-3">
                <Image
                  src={"/images/blogs/avatar.png"}
                  alt={"Avatar"}
                  width={60}
                  height={60}
                  className={"size-10 md:size-15 rounded-full object-cover"}
                />
                <div
                  className={
                    "font-medium text-xs md:text-sm lg:text-base xl:text-lg"
                  }
                >
                  <p className={"p-0"}>Name of Author</p>
                  <p className={"text-secondary p-0"}>Role / Company</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base lg:text-lg">
            <p>
              The aim of their workshops is not to find the next da Viinci or an
              up-and-coming Proust. Rather, they hope to deepen the
              sensibilities of the lucky individuals who enroll in them. Instead
              of focusing on any one art form, participants in The Creativity
              Workshop do it all–they write, they draw, they tell stories, and
              most importantly, they learn to play, play, play. “If creativity
              is any one thing, it is play,” Berc says. “For a child, life is
              just one big erector set to b snapped together and pulled apart in
              a thousand different ways. But as adults, we often lose that
              flexibility and put away our toys as we acquire jobs, kids, and
              mortgages.”
            </p>
            <p>
              Berc and Fogel believe creativity is encoded into every human’s
              DNA and that, even though adults become less flexible as they age,
              that sense of wonder and reckless imagination can be regained. In
              fact, by focusing on imagination rather than on creating a product
              per se, creativity becomes a way to view and appreciate life.
            </p>
            <p>
              The pair know what they are talking about. Berc, a professor at
              the University of Iowa Writing Programs from 1985-2000, has
              written novels and plays that have been performed by such
              celebrities as Stanley Tucci, Patrick Stewart, and Tony Shalhoub.
              Fogel, whose award-winning work can be seen in museums and public
              and private collections across the globe, is not only a painter
              but also an expert in cultural myths and legends.
            </p>
            <p>
              In their workshops, held annually in Crete, Paris, Barcelona,
              Florence, Dublin, Prague, and New York City, they lead exercises
              in free-form writing and drawing, associative thinking, mapmaking,
              sense perception, and other techniques that help people access and
              develop their innate creative nature. During the eight days of the
              program, (which is taught in English), you will spend five of them
              (three and a half hours per day) in class with Berc and Fogel. The
              rest of your time is free to explore and be inspired by the
              fabulous locations they have chosen for their workshop venues.
            </p>
          </div>
        </div>
        <div className="flex">
          <Button size={"lg"} variant={"ghost"}>
            Previous
          </Button>
          <Button size={"lg"}>Next</Button>
        </div>
      </Container>
    </section>
  );
};

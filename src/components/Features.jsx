import { motion } from "framer-motion";
import { CircleImage, Highlight, ReadMoreLink, ScribbleUnderline } from "./ui";
import { CONTENT, PAGE, PAGE_X } from "../constants/layout";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section
      id="studio"
      className={`relative overflow-hidden bg-white ${PAGE} ${PAGE_X} py-16 sm:py-20 lg:py-24`}
    >
      <motion.img
        src="/avatars/Vector2517.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[30%] top-[520px] z-0 w-[25rem] -translate-x-1/2 opacity-50 sm:w-[42rem] lg:w-[95rem] lg:left-96 lg:translate-x-0"
        initial={{ opacity: 0, rotate: 120, scale: 1.9 }}
        whileInView={{ opacity: 0.5, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <div className={`${CONTENT} relative z-10 flex flex-col gap-24`}>
        {/* Row 1: image right, copy left */}
        <motion.div
          className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-stretch lg:gap-[10.625rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative flex shrink-0 justify-center lg:justify-end">
            <img
              src="/avatars/Polygon3.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-[25%] top-[10%] z-0 w-[11.25rem] rotate-[32deg] sm:w-[13.75rem] lg:w-[17.125rem]"
            />
            <CircleImage
              src="/avatars/image348.png"
              alt="Team collaborating in a meeting"
              className="relative z-10"
            />
          </div>

          <div className="relative flex max-w-[46.0625rem] flex-1 flex-col justify-center text-center lg:text-left">
            <h2 className="relative mb-2 font-gerbil text-[32px] leading-11 text-black sm:text-[40px] sm:leading-14 lg:text-[56px] lg:leading-[4.75rem]">
              <ScribbleUnderline widthClass="w-[8.75rem] sm:w-[12.5rem] lg:w-[15rem]">
                Tomorrow
              </ScribbleUnderline>{" "}
              should be better than{" "}
              <Highlight tone="mint">today</Highlight>
            </h2>
            <p className="mb-6 max-w-[44.6875rem] font-satoshi text-base leading-6 text-black sm:text-lg sm:leading-7 lg:text-2xl lg:leading-9">
              We are a team of strategists, designers communicators,
              researchers. Togeather, we belive that progress only happens when
              you refuse to play things safe.
            </p>
            <div className="flex justify-center lg:justify-start">
              <ReadMoreLink />
            </div>
          </div>
        </motion.div>

        {/* Row 2: image left, copy right */}
        <motion.div
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-[18.125rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative flex shrink-0 justify-center lg:justify-start">
            <img
              src="/avatars/Polygon1.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -left-[10%] -top-[10%] z-0 w-[11.25rem] sm:w-[13.75rem] lg:w-[17.125rem]"
            />
            <CircleImage
              src="/avatars/image349.png"
              alt="Creative team working together"
              className="relative z-10"
            />
            <img
              src="/avatars/Polygon2.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -bottom-[5%] -right-[4%] z-20 w-[8.75rem] sm:w-[11.25rem] lg:w-[13.75rem]"
            />
          </div>

          <div className="relative flex max-w-[44rem] flex-1 flex-col justify-center text-center lg:text-left">
            <h2 className="relative mb-2 max-w-[40.5rem] font-gerbil text-[32px] leading-11 text-black sm:text-[40px] sm:leading-14 lg:text-[56px] lg:leading-[4.75rem]">
              <Highlight tone="mint">See</Highlight> how we can help you{" "}
              <ScribbleUnderline widthClass="w-[10rem] sm:w-[13.75rem] lg:w-[16.25rem]">
                progress
              </ScribbleUnderline>
            </h2>
            <p className="mb-6 max-w-[43.3125rem] font-satoshi text-base leading-6 text-black sm:text-lg sm:leading-7 lg:text-2xl lg:leading-9">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>
            <div className="flex justify-center lg:justify-start">
              <ReadMoreLink />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

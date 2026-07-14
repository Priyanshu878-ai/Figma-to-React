import { motion } from "framer-motion";
import {
  CircleImage,
  Highlight,
  ReadMoreLink,
  ScribbleUnderline,
} from "./ui";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
      className="
        relative
        min-h-[900px]
        overflow-hidden
        bg-white
        px-6
        py-16
        sm:px-10
        lg:px-0
        lg:py-10
      "
    >
      {/* CURVED RED LINE */}
      <img
        src="/avatars/Vector2517.png"
        alt=""
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-[30%]
          top-[34%]
          z-0
          hidden
          w-[75%]
          max-w-none
          object-contain
          lg:block
        "
      />

      <div className="relative z-10 mx-auto max-w-[940px]">
        {/* ================= ROW 1 ================= */}
        <motion.div
          className="
            relative
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_380px]
            lg:gap-8
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* TEXT */}
          <div className="relative z-20">
            <h2
              className="
                mb-5
                font-gerbil
                text-[36px]
                leading-[1.05]
                text-black
                sm:text-[42px]
                lg:text-[43px]
              "
            >
              <ScribbleUnderline widthClass="w-[190px]">
                Tomorrow
              </ScribbleUnderline>{" "}
              should
              <br />
              be better than{" "}
              <Highlight tone="mint">today</Highlight>
            </h2>

            <p
              className="
                mb-6
                max-w-[430px]
                font-satoshi
                text-[13px]
                leading-[1.55]
                text-black
              "
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>

            <ReadMoreLink />
          </div>

          {/* TOP IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/avatars/Polygon3.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -right-[45px]
                top-[25px]
                z-0
                w-[145px]
              "
            />

            <CircleImage
              src="/avatars/image348.png"
              alt="Team collaborating in a meeting"
              className="
                relative
                z-10
                !size-[350px]
              "
            />
          </div>
        </motion.div>

        {/* ================= ROW 2 ================= */}
        <motion.div
          className="
            relative
            mt-[100px]
            grid
            items-center
            gap-12
            lg:mt-[95px]
            lg:grid-cols-[380px_1fr]
            lg:gap-10
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* BOTTOM IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="/avatars/Polygon1.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -left-[15px]
                top-[0px]
                z-0
                w-[125px]
              "
            />

            <CircleImage
              src="/avatars/image349.png"
              alt="Creative team working together"
              className="
                relative
                z-10
                !size-[350px]
              "
            />

            <img
              src="/avatars/Polygon2.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -bottom-[15px]
                right-[5px]
                z-20
                w-[115px]
              "
            />
          </div>

          {/* TEXT */}
          <div className="relative z-20">
            <h2
              className="
                mb-5
                font-gerbil
                text-[36px]
                leading-[1.05]
                text-black
                sm:text-[42px]
                lg:text-[43px]
              "
            >
              <Highlight tone="mint">See</Highlight> how we can
              <br />
              help you{" "}
              <ScribbleUnderline widthClass="w-[175px]">
                progress
              </ScribbleUnderline>
            </h2>

            <p
              className="
                mb-6
                max-w-[430px]
                font-satoshi
                text-[13px]
                leading-[1.55]
                text-black
              "
            >
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>

            <ReadMoreLink />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
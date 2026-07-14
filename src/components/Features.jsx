import { motion } from "framer-motion";
import {
  CircleImage,
  Highlight,
  ReadMoreLink,
  ScribbleUnderline,
} from "./ui";
import { CONTENT, PAGE, PAGE_X } from "../constants/layout";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <section
      id="studio"
      className={`
        relative
        overflow-hidden
        bg-white
        ${PAGE}
        ${PAGE_X}
        py-16
        sm:py-20
        lg:py-24
      `}
    >
      {/* ================= BACKGROUND CURVED LINE ================= */}
      <motion.img
        src="/avatars/Vector2517.png"
        alt=""
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[42%]
          z-0
          w-[110%]
          max-w-none
          opacity-60
          sm:left-[15%]
          sm:w-[105%]
          lg:left-[25%]
          lg:top-[36%]
          lg:w-[90%]
        "
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        whileInView={{
          opacity: 0.6,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div
        className={`
          ${CONTENT}
          relative
          z-10
          mx-auto
          flex
          flex-col
          gap-32
          lg:gap-[180px]
        `}
      >
        {/* ==================================================
            ROW 1
            TEXT LEFT — IMAGE RIGHT
        ================================================== */}
        <motion.div
          className="
            flex
            flex-col
            items-center
            gap-12
            lg:grid
            lg:grid-cols-[1fr_500px]
            lg:items-center
            lg:gap-20
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* TEXT */}
          <div
            className="
              order-2
              relative
              max-w-[650px]
              text-center
              lg:order-1
              lg:text-left
            "
          >
            <h2
              className="
                mb-6
                font-gerbil
                text-[34px]
                leading-[1.12]
                text-black
                sm:text-[44px]
                lg:text-[56px]
              "
            >
              <ScribbleUnderline
                widthClass="
                  w-[9rem]
                  sm:w-[12rem]
                  lg:w-[14rem]
                "
              >
                Tomorrow
              </ScribbleUnderline>{" "}
              should
              <br className="hidden lg:block" />
              be better than{" "}
              <Highlight tone="mint">today</Highlight>
            </h2>

            <p
              className="
                mb-7
                max-w-[580px]
                font-satoshi
                text-[15px]
                leading-[1.55]
                text-black
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>

            <div className="flex justify-center lg:justify-start">
              <ReadMoreLink />
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              order-1
              relative
              flex
              shrink-0
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            {/* RED POLYGON */}
            <motion.img
              src="/avatars/Polygon3.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -right-[10%]
                top-[8%]
                z-0
                w-[140px]
                rotate-[15deg]
                sm:w-[180px]
                lg:-right-[12%]
                lg:w-[220px]
              "
              initial={{
                opacity: 0,
                rotate: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                rotate: 15,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            />

            <CircleImage
              src="/avatars/image348.png"
              alt="Team collaborating in a meeting"
              className="
                relative
                z-10
                lg:!size-[500px]
              "
            />
          </div>
        </motion.div>

        {/* ==================================================
            ROW 2
            IMAGE LEFT — TEXT RIGHT
        ================================================== */}
        <motion.div
          className="
            flex
            flex-col
            items-center
            gap-12
            lg:grid
            lg:grid-cols-[500px_1fr]
            lg:items-center
            lg:gap-24
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* IMAGE */}
          <div
            className="
              relative
              flex
              shrink-0
              justify-center
              lg:justify-start
            "
          >
            {/* LEFT RED POLYGON */}
            <motion.img
              src="/avatars/Polygon1.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -left-[10%]
                top-[5%]
                z-0
                w-[130px]
                sm:w-[170px]
                lg:-left-[8%]
                lg:w-[210px]
              "
              initial={{
                opacity: 0,
                x: -30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            />

            <CircleImage
              src="/avatars/image349.png"
              alt="Creative team working together"
              className="
                relative
                z-10
                lg:!size-[500px]
              "
            />

            {/* BOTTOM RED POLYGON */}
            <motion.img
              src="/avatars/Polygon2.png"
              alt=""
              aria-hidden
              className="
                pointer-events-none
                absolute
                -bottom-[7%]
                right-[2%]
                z-20
                w-[110px]
                sm:w-[145px]
                lg:-bottom-[8%]
                lg:right-[0%]
                lg:w-[180px]
              "
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
            />
          </div>

          {/* TEXT */}
          <div
            className="
              relative
              max-w-[650px]
              text-center
              lg:text-left
            "
          >
            <h2
              className="
                mb-6
                font-gerbil
                text-[34px]
                leading-[1.12]
                text-black
                sm:text-[44px]
                lg:text-[56px]
              "
            >
              <Highlight tone="mint">See</Highlight> how we can
              <br className="hidden lg:block" />
              help you{" "}
              <ScribbleUnderline
                widthClass="
                  w-[9rem]
                  sm:w-[12rem]
                  lg:w-[15rem]
                "
              >
                progress
              </ScribbleUnderline>
            </h2>

            <p
              className="
                mb-7
                max-w-[600px]
                font-satoshi
                text-[15px]
                leading-[1.55]
                text-black
                sm:text-[17px]
                lg:text-[18px]
              "
            >
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
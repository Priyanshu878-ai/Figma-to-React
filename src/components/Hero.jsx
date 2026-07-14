import { motion } from "framer-motion";
import { Highlight, ScribbleUnderline } from "./ui";
import { CONTENT } from "../constants/layout";

const AVATARS = [
  {
    src: "/avatars/ellipse-255.png",
    className:
      "top-[40%] -left-[5%] w-[80px] sm:w-[100px] lg:w-[130px]",
  },
  {
    src: "/avatars/ellipse-261.png",
    className:
      "top-[25%] left-[3%] w-[75px] sm:w-[95px] lg:w-[125px]",
  },
  {
    src: "/avatars/ellipse-258.png",
    className:
      "top-0 left-[22%] w-[85px] sm:w-[105px] lg:w-[135px]",
  },
  {
    src: "/avatars/ellipse-256.png",
    className:
      "top-[48%] left-[33%] w-[80px] sm:w-[100px] lg:w-[125px]",
  },
  {
    src: "/avatars/ellipse-257.png",
    className:
      "top-[15%] left-[51%] w-[80px] sm:w-[100px] lg:w-[130px]",
  },
  {
    src: "/avatars/ellipse-260.png",
    className:
      "top-[35%] left-[63%] w-[85px] border-4 border-white sm:w-[105px] lg:w-[135px]",
  },
  {
    src: "/avatars/ellipse-259.png",
    className:
      "top-0 left-[77%] w-[75px] sm:w-[95px] lg:w-[120px]",
  },
  {
    src: "/avatars/ellipse-262.png",
    className:
      "top-[42%] left-[91%] w-[80px] sm:w-[100px] lg:w-[130px]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pb-12 sm:px-6 lg:px-10"
    >
      {/* HERO TEXT */}
      <motion.div
        className="relative mx-auto max-w-[1050px] pt-20 text-center sm:pt-24 lg:pt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Scribble decoration */}
        <motion.img
          src="/avatars/Vector5.png"
          alt=""
          aria-hidden
          className="
            pointer-events-none absolute
            left-1/2 top-[145px] z-0
            w-[180px] -translate-x-1/2
            sm:top-[165px] sm:w-[280px]
            lg:top-[180px] lg:w-[430px]
          "
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Heading */}
        <h1
          className="
            relative z-10
            font-gerbil
            text-[34px]
            leading-[1.15]
            tracking-[-0.02em]
            text-black

            sm:text-[48px]
            md:text-[58px]
            lg:text-[68px]
            lg:leading-[1.12]
          "
        >
          The{" "}
          <ScribbleUnderline widthClass="w-[6rem] sm:w-[9rem] lg:w-[12rem]">
            thinkers
          </ScribbleUnderline>{" "}
          and
          <br />

          doers were ch
          <Highlight tone="blush">anging</Highlight>
          <br />

          the <Highlight tone="mint">status</Highlight> Quo with
        </h1>

        {/* Description */}
        <motion.p
          className="
            mx-auto mt-8
            max-w-[700px]
            font-satoshi
            text-[13px]
            leading-5
            text-black

            sm:text-[14px]
            sm:leading-6

            lg:mt-9
            lg:text-[15px]
            lg:leading-6
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          We are a team of strategists, designers, communicators, researchers.
          Together we believe that progress only happens when you refuse to play
          things safe.
        </motion.p>
      </motion.div>

      {/* AVATARS */}
      <motion.div
        className={`${CONTENT} relative mx-auto mt-12 h-[26rem] w-full`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {AVATARS.map((avatar) => (
          <motion.img
            key={avatar.src}
            src={avatar.src}
            alt=""
            drag
            dragElastic={0.2}
            dragMomentum={false}
            className={`absolute cursor-grab select-none rounded-full object-cover active:cursor-grabbing ${avatar.className}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.06,
              y: -6,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            whileDrag={{
              scale: 1.1,
              zIndex: 50,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
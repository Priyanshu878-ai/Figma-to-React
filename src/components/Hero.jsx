import { motion } from "framer-motion";
import { Highlight, ScribbleUnderline } from "./ui";
import { CONTENT, PAGE, PAGE_X } from "../constants/layout";

const AVATARS = [
  {
    src: "/avatars/ellipse-255.png",
    className:
      "top-[40%] left-[-10%] w-[120px] sm:w-[150px] md:w-[170px] lg:w-[220px]",
  },
  {
    src: "/avatars/ellipse-261.png",
    className:
      "top-[25%] left-[0%] w-[110px] sm:w-[150px] md:w-[170px] lg:w-[220px]",
  },
  {
    src: "/avatars/ellipse-258.png",
    className:
      "top-0 left-[20%] w-[120px] sm:w-[150px] md:w-[170px] lg:w-[220px]",
  },
  {
    src: "/avatars/ellipse-256.png",
    className:
      "top-[50%] left-[30%] w-[110px] sm:w-[150px] md:w-[170px] lg:w-[220px]",
  },
  {
    src: "/avatars/ellipse-257.png",
    className:
      "top-[15%] left-[50%] w-[115px] sm:w-[145px] md:w-[165px] lg:w-[220px]",
  },
  {
    src: "/avatars/ellipse-260.png",
    className:
      "top-[26%] left-[60%] w-[120px] border-4 border-white sm:w-[150px] sm:border-[5px] md:w-[170px] md:border-[6px] lg:w-[220px] sm:top-[28%] md:top-[40%]",
  },
  {
    src: "/avatars/ellipse-259.png",
    className:
      "top-0 left-[75%] w-[110px] sm:w-[140px] md:w-[160px] lg:w-[200px]",
  },
  {
    src: "/avatars/ellipse-262.png",
    className:
      "top-[45%] left-[90%] w-[110px] sm:w-[135px] md:w-[155px] lg:w-[220px]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className={`relative overflow-hidden bg-white ${PAGE} ${PAGE_X} pb-12`}
    >
      {/* HERO TEXT */}
      <motion.div
        className={`${CONTENT} relative pt-12 text-center sm:pt-16 lg:pt-20`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.img
          src="/avatars/Vector5.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-28 z-0 w-[7.5rem] -translate-x-1/2 sm:top-30 sm:w-[12.5rem] md:top-38 md:w-[25rem] lg:top-46 lg:w-[35rem]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        <h1 className="relative z-10 font-gerbil text-[28px] leading-9 text-black sm:text-[38px] sm:leading-[3.125rem] md:text-[70px] md:leading-[5.625rem] lg:text-[100px] lg:leading-[7.875rem]">
          The{" "}
          <ScribbleUnderline widthClass="w-[5.5rem] sm:w-[7.5rem] md:w-[10rem] lg:w-[12rem]">
            thinkers
          </ScribbleUnderline>{" "}
          and
          <br />
          doers were ch
          <Highlight tone="blush">anging</Highlight>
          <br />
          the <Highlight tone="mint">status</Highlight> Quo with
        </h1>

        <motion.p
          className="mx-auto mt-10 max-w-[90%] font-satoshi text-sm leading-6 text-black sm:max-w-[43.75rem] sm:text-base sm:leading-7 md:max-w-[51.25rem] md:text-xl md:leading-8 lg:text-2xl lg:leading-9"
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

      {/* DRAGGABLE AVATARS */}
      <motion.div
        className={`${CONTENT} relative mt-20 h-[26.25rem] w-full`}
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

            /* DRAG FUNCTIONALITY */
            drag
            dragElastic={0.2}
            dragMomentum={false}

            className={`absolute cursor-grab select-none rounded-full object-cover active:cursor-grabbing ${avatar.className}`}

            /* ENTRANCE ANIMATION */
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

            /* HOVER ANIMATION */
            whileHover={{
              scale: 1.04,
              y: -6,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}

            /* DRAG ANIMATION */
            whileDrag={{
              scale: 1.1,
              zIndex: 50,
              cursor: "grabbing",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
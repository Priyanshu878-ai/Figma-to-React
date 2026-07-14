import { motion } from "framer-motion";
import { Highlight, ScribbleUnderline } from "./ui";

const AVATARS = [
  {
    src: "/avatars/ellipse-255.png",
    className:
      "left-[2%] top-[115px] w-[90px] sm:w-[105px] lg:w-[120px]",
  },
  {
    src: "/avatars/ellipse-261.png",
    className:
      "left-[11%] top-[85px] w-[95px] sm:w-[110px] lg:w-[125px]",
  },
  {
    src: "/avatars/ellipse-258.png",
    className:
      "left-[29%] top-0 w-[105px] sm:w-[120px] lg:w-[140px]",
  },
  {
    src: "/avatars/ellipse-256.png",
    className:
      "left-[36%] top-[135px] w-[100px] sm:w-[120px] lg:w-[135px]",
  },
  {
    src: "/avatars/ellipse-257.png",
    className:
      "left-[52%] top-[30px] w-[105px] sm:w-[125px] lg:w-[140px]",
  },
  {
    src: "/avatars/ellipse-260.png",
    className:
      "left-[61%] top-[85px] w-[100px] border-4 border-white sm:w-[120px] lg:w-[135px]",
  },
  {
    src: "/avatars/ellipse-259.png",
    className:
      "left-[75%] top-0 w-[105px] sm:w-[125px] lg:w-[140px]",
  },
  {
    src: "/avatars/ellipse-262.png",
    className:
      "right-[1%] top-[95px] w-[100px] sm:w-[120px] lg:w-[135px]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-12"
    >
      {/* ================= HERO TEXT ================= */}
      <motion.div
        className="
          relative
          mx-auto
          max-w-[1050px]
          px-4
          pt-20
          text-center
          sm:px-6
          sm:pt-24
          lg:pt-24
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {/* Orange scribble */}
        <motion.img
          src="/avatars/Vector5.png"
          alt=""
          aria-hidden
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[145px]
            z-0
            w-[180px]
            -translate-x-1/2
            sm:top-[165px]
            sm:w-[280px]
            lg:top-[180px]
            lg:w-[430px]
          "
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Main Heading */}
        <h1
          className="
            relative
            z-10
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
            mx-auto
            mt-8
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
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
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

      {/* ================= AVATARS ================= */}
      <motion.div
        className="
          relative
          mx-auto
          mt-12
          hidden
          h-[300px]
          w-full
          max-w-[1400px]
          sm:block
        "
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
            draggable={false}

            /* Drag */
            drag
            dragElastic={0.2}
            dragMomentum={false}

            /* Position */
            className={`
              absolute
              aspect-square
              cursor-grab
              select-none
              rounded-full
              object-cover
              active:cursor-grabbing
              ${avatar.className}
            `}

            /* Entrance */
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

            /* Hover */
            whileHover={{
              scale: 1.07,
              y: -7,
              zIndex: 30,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}

            /* Dragging */
            whileDrag={{
              scale: 1.1,
              zIndex: 50,
              cursor: "grabbing",
            }}
          />
        ))}
      </motion.div>

      {/* ================= MOBILE AVATARS ================= */}
      <motion.div
        className="
          mx-auto
          mt-10
          grid
          max-w-[400px]
          grid-cols-4
          gap-3
          px-4
          sm:hidden
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
      >
        {AVATARS.map((avatar) => (
          <motion.img
            key={`mobile-${avatar.src}`}
            src={avatar.src}
            alt=""
            draggable={false}
            className="
              aspect-square
              w-full
              cursor-grab
              select-none
              rounded-full
              object-cover
            "
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
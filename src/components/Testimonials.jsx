import { motion } from "framer-motion";
import { Highlight } from "./ui";

export default function Testimonials() {
  return (
    <section
      id="faqs"
      className="
        relative
        min-h-[620px]
        overflow-hidden
        bg-white
        px-4
        py-14
        sm:py-16
        lg:min-h-[720px]
        lg:px-10
        lg:py-20
      "
    >
      {/* ALL BACKGROUND AVATARS */}
      <motion.img
        src="/avatars/image.png"
        alt=""
        aria-hidden
        className="
          absolute
          left-1/2
          top-8
          z-0
          w-[98%]
          max-w-[1600px]
          -translate-x-1/2
          cursor-pointer
          object-contain
        "
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.015,
          y: -5,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        }}
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[780px]
          flex-col
          items-center
          pt-24
          sm:pt-28
          lg:pt-32
        "
      >
        {/* HEADING */}
        <motion.h2
          className="
            mb-1
            max-w-[580px]
            text-center
            font-gerbil
            text-[30px]
            leading-[1.05]
            text-black
            sm:text-[38px]
            lg:text-[46px]
          "
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          What <Highlight tone="mint">our customer</Highlight>
          <br />
          says About Us
        </motion.h2>

        {/* UNDERLINE */}
        <motion.div
          className="
            mb-7
            h-5
            w-36
            sm:w-44
            lg:mb-8
            lg:w-48
          "
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <img
            src="/avatars/title-line.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* TESTIMONIAL CARD */}
        <motion.blockquote
          className="
            relative
            w-full
            max-w-[840px]
            cursor-default
            rounded-[34px]
            bg-[#D7EEDD]/55
            px-10
            py-9
            sm:px-14
            sm:py-10
          "
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
          }}
          whileHover={{
            y: -6,
            scale: 1.015,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.10)",
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        >
          {/* LEFT QUOTE */}
          <div className="absolute left-5 top-5 flex gap-0.5">
            <img
              src="/avatars/quote-l.svg"
              alt=""
              className="h-7 w-4 object-contain"
            />
            <img
              src="/avatars/quote-l.svg"
              alt=""
              className="h-7 w-4 object-contain"
            />
          </div>

          {/* RIGHT QUOTE */}
          <div className="absolute bottom-5 right-7 flex gap-0.5">
            <img
              src="/avatars/quote-r.svg"
              alt=""
              className="h-7 w-4 object-contain"
            />
            <img
              src="/avatars/quote-r.svg"
              alt=""
              className="h-7 w-4 object-contain"
            />
          </div>

          {/* TEXT */}
          <p
            className="
              mx-auto
              max-w-[620px]
              text-center
              font-satoshi
              text-[15px]
              leading-[1.6]
              text-black
              sm:text-[17px]
            "
          >
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company has not used, which have also proved
            to be easy to use and reliable.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
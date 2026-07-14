import { motion } from "framer-motion";
import { Highlight, SectionLine } from "./ui";
import { CONTENT, PAGE, PAGE_X } from "../constants/layout";

const ROWS = [
  {
    id: 1,
    small: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
  },
  {
    id: 2,
    small: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    small: "Delta faucet content,\nsocial, digital",
    title: (
      <>
        Piloting digital confi
        <Highlight tone="mint">nfid</Highlight>
        ence
      </>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={`flex w-full justify-center bg-white ${PAGE} ${PAGE_X} py-16 sm:py-20 lg:py-24`}
    >
      <div className={`${CONTENT} relative max-w-[101.125rem]`}>
        <motion.div
          className="relative mb-6 max-w-[54.3125rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-gerbil text-[40px] leading-12 text-black sm:text-[60px] sm:leading-[4.5rem] lg:text-[100px] lg:leading-[7.25rem]">
            What we <Highlight tone="mint">can</Highlight>
            <br />
            offer you!
          </h2>

          <motion.img
            src="/avatars/Rectangle661.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-6 size-20 rotate-[-3.88deg] object-contain opacity-90 sm:size-28 lg:-right-16 lg:size-36"
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 0.9, scale: 1, rotate: -3.88 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="mb-10 flex h-[1.875rem] items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <SectionLine className="w-[13.75rem] sm:w-[17.5rem] lg:w-[23.1875rem]" />
        </motion.div>

        <div className="w-full border-y border-[#B1B1B1]">
          {ROWS.map((row, index) => (
            <motion.div
              key={row.id}
              className={`group flex flex-col gap-4 py-6 sm:flex-row sm:items-center ${
                index !== ROWS.length - 1 ? "border-b border-[#B1B1B1]" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{
                backgroundColor: "rgba(0,0,0,0.02)",
                transition: { duration: 0.25 },
              }}
            >
              <p className="w-full whitespace-pre-line font-satoshi text-xs leading-5 text-black sm:w-[28%] sm:text-sm sm:leading-6 lg:text-base">
                {row.small}
              </p>
              <h3 className="flex-1 font-gerbil text-[22px] leading-snug text-black sm:text-[28px] lg:text-[40px]">
                {row.title}
              </h3>
              <motion.img
                src="/avatars/Arrow44.png"
                alt=""
                aria-hidden
                className="h-4 w-[3.75rem] object-contain sm:w-[4.375rem] lg:w-[5.0625rem]"
                whileHover={{
                  x: 6,
                  transition: { type: "spring", stiffness: 260, damping: 18 },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

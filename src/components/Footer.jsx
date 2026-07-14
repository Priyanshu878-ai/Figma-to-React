import { motion } from "framer-motion";
import { PillButton } from "./ui";

const COLUMNS = [
  {
    title: "Company",
    items: [
      { label: "Home", href: "#home" },
      { label: "Studio", href: "#studio" },
      { label: "Service", href: "#services" },
      { label: "Blog", href: "#faqs" },
    ],
  },
  {
    title: "Terms & Policies",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Explore", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    items: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex w-full justify-center bg-[#D7EEDD] text-black"
    >
      <div className="relative flex w-full max-w-[1600px] flex-col gap-16 px-4 py-20 lg:gap-20 lg:px-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 gap-3 sm:gap-5">
          <motion.img
            src="/avatars/squiggle-left.svg"
            alt=""
            className="w-16 sm:w-24 lg:w-36"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          />
          <motion.img
            src="/avatars/squiggle-right.svg"
            alt=""
            className="w-16 sm:w-24 lg:w-36"
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
              delay: 0.35,
            }}
          />
        </div>

        <img
          src="/avatars/accent-blob.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-6 top-36 w-12 sm:right-10 sm:w-16 lg:right-20 lg:top-44 lg:w-24"
        />

        <motion.div
          className="relative mx-auto mt-10 w-full max-w-[900px] rounded-[40px] bg-white/40 px-6 py-12 text-center backdrop-blur-sm sm:mt-14 sm:rounded-[60px] sm:px-12 sm:py-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          whileHover={{
            y: -4,
            boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
          }}
        >
          <h2 className="mb-4 font-gerbil text-[28px] leading-tight sm:text-[44px] lg:text-[64px]">
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-[34rem] font-satoshi text-base leading-7 text-black/85 sm:text-lg lg:text-2xl lg:leading-9">
            To make your stay special and even more memorable
          </p>
          <PillButton>Subscribe now</PillButton>
        </motion.div>

        <div className="mx-auto h-px w-full max-w-[1400px] bg-black/15" />

        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-satoshi text-base font-bold sm:text-lg">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-satoshi text-sm text-black/75 transition-colors hover:text-black sm:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 font-satoshi text-base font-bold sm:text-lg">
              Terms & Policies
            </h3>
            <p className="font-satoshi text-sm leading-6 text-black/75 sm:text-base sm:leading-7">
              1498w Fluton ste, STE
              <br />
              2D Chicgo, IL 63867.
              <br />
              <br />
              (123) 456789000
              <br />
              <a
                href="mailto:info@elementum.com"
                className="underline-offset-2 hover:underline"
              >
                info@elementum.com
              </a>
            </p>
          </div>
        </div>

        <p className="text-center font-satoshi text-sm text-black/60">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ's", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="nav"
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white"
    >
      <motion.div
        className="
          mx-auto grid h-[76px] w-full grid-cols-2 items-center
          px-4
          sm:px-6
          lg:grid-cols-3 lg:px-10
          xl:px-16
        "
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* LEFT - Logo */}
        <a
          href="#home"
          className="
            justify-self-start
            font-gerbil
            text-[22px]
            leading-none
            tracking-tight
            sm:text-[24px]
            lg:text-[28px]
          "
          onClick={() => setOpen(false)}
        >
          Elementum
        </a>

        {/* CENTER - Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            justify-center
            whitespace-nowrap
            lg:flex lg:gap-6
            xl:gap-9
          "
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                font-satoshi
                text-[15px]
                font-medium
                text-black
                transition-opacity
                hover:opacity-55
                xl:text-[18px]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT - Two Lines */}
        <button
          type="button"
          className="
            relative
            flex h-10 w-10
            items-center
            justify-center
            justify-self-end
          "
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-[1px] w-6 bg-black transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[3px]"
            }`}
          />

          <span
            className={`absolute h-[1px] w-6 bg-black transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </motion.div>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="
              absolute inset-x-0 top-full z-40
              flex flex-col gap-1
              border-b border-gray-200
              bg-white px-4 py-3
              shadow-md
              lg:hidden
            "
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  rounded-lg
                  px-3 py-3
                  font-satoshi
                  text-base
                  font-medium
                "
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
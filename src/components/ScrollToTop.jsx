import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-4 z-50 flex size-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-black shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-[0_16px_30px_rgba(0,0,0,0.35)] active:scale-95 sm:bottom-8 sm:right-8 sm:size-12 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-75 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}

/** Shared highlight pill behind text words (Figma design). */
export function Highlight({ children, tone = "mint", className = "" }) {
  const tones = {
    mint: "bg-green-100",
    blush: "bg-pink-200",
    red: "bg-[#FF2020]/70",
  };

  return (
    <span className={`relative z-10 inline-block ${className}`}>
      <span
        className={`absolute inset-0 -z-10 size-full rounded-full ${tones[tone]}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

/** Yellow scribble underline (Vector5.png from Figma). */
export function ScribbleUnderline({
  children,
  widthClass = "w-[8.75rem] sm:w-[12.5rem] lg:w-[15rem]",
}) {
  return (
    <span className="relative z-10 inline-block">
      <span className="absolute inset-x-0 -bottom-2 z-0 flex justify-start">
        <img
          src="/avatars/Vector5.png"
          alt=""
          aria-hidden
          className={`${widthClass} h-5 object-contain object-left`}
        />
      </span>
      {children}
    </span>
  );
}

export function ReadMoreLink({ href = "#services" }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 font-satoshi text-base font-bold text-black transition-opacity hover:opacity-70 lg:text-lg"
    >
      Read more
      <img
        src="/avatars/Arrow4.png"
        alt=""
        aria-hidden
        className="h-4 w-36 object-contain transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export function PillButton({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full bg-black px-10 py-3 font-satoshi text-base font-bold leading-[30px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:scale-[0.97] sm:px-12 sm:py-4 sm:text-lg lg:text-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function CircleImage({ src, alt = "", className = "" }) {
  return (
    <div
      className={`relative size-[260px] overflow-hidden rounded-full sm:size-[360px] lg:size-[600px] ${className}`}
    >
      <img src={src} alt={alt} className="size-full object-cover" />
    </div>
  );
}

export function SectionLine({ className = "w-[11rem] sm:w-[17.5rem] lg:w-[23rem]" }) {
  return (
    <img
      src="/avatars/Vector5.png"
      alt=""
      aria-hidden
      className={`h-6 object-contain object-left sm:h-7 lg:h-[1.875rem] ${className}`}
    />
  );
}

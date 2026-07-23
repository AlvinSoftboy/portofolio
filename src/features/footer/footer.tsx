import { BRAND_NAME } from "@/constants";

export const Footer = () => {
  return (
    /* Footer: ink background — maximum contrast, print-like terminus */
    <footer
      className="border-t-[3px] overflow-hidden"
      style={{
        backgroundColor: "var(--nb-ink)",
        borderColor: "var(--nb-ink)",
      }}
    >
      <div className="px-2 sm:px-4 pt-12 pb-2">
        <p
          className="mb-6 px-4 font-black text-xs sm:text-sm uppercase tracking-widest"
          style={{ color: "var(--nb-surface)" }}
        >
          © {new Date().getFullYear()} — Built with Love, Sincerely
        </p>
        {/* Brand: accent color on ink bg — bold, clear, no clash */}
        <h2
          className="font-black text-center uppercase leading-[0.85] tracking-tighter whitespace-nowrap select-none"
          style={{
            color: "var(--nb-accent)",
            fontSize: "clamp(4rem, 26vw, 22rem)",
          }}
        >
          {BRAND_NAME}
        </h2>
      </div>
    </footer>
  );
};

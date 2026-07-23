import { BRAND_NAME } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-neutral-200 border-black border-t-[3px] overflow-hidden">
      <div className="px-2 sm:px-4 pt-12 pb-2">
        <p className="mb-6 px-4 font-black text-black text-xs sm:text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} — Built with Love, Sincerely
        </p>
        <h2
          className="font-black text-[#ff5b1f] text-center uppercase leading-[0.85] tracking-tighter whitespace-nowrap select-none"
          style={{ fontSize: "clamp(4rem, 26vw, 22rem)" }}
        >
          {BRAND_NAME}
        </h2>
      </div>
    </footer>
  );
};

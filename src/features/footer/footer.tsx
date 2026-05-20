import { BRAND_NAME } from "../shared/data";

export const Footer = () => {
  return (
    <footer className="overflow-hidden border-t-[3px] border-black bg-neutral-200">
      <div className="px-2 pb-2 pt-12 sm:px-4">
        <p className="mb-6 px-4 text-xs font-black uppercase tracking-widest text-black sm:text-sm">
          © {new Date().getFullYear()} — Built with React, TS, Tailwind
        </p>
        <h2
          className="select-none whitespace-nowrap text-center font-black uppercase leading-[0.85] tracking-tighter text-[#ff5b1f]"
          style={{ fontSize: "clamp(4rem, 26vw, 22rem)" }}
        >
          {BRAND_NAME}
        </h2>
      </div>
    </footer>
  );
};

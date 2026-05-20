import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BrutalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-[#ff5b1f] text-black",
  secondary: "bg-white text-black",
  ghost: "bg-black text-white",
};

export const BrutalButton = ({
  variant = "primary",
  children,
  className = "",
  ...rest
}: BrutalButtonProps) => {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 border-[3px] border-black px-6 py-3 text-base font-black uppercase tracking-wide shadow-[6px_6px_0_0_#000] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

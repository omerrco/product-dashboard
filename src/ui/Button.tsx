import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

const styles = {
  primary:
    "bg-brand-500 text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600",
  secondary:
    "border border-orange-200 bg-white/80 text-slate-700 hover:bg-orange-50",
  danger: "bg-red-500 text-white shadow-sm shadow-red-500/30 hover:bg-red-600",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

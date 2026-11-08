"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded-xl px-6 py-3 text-base font-semibold transition-colors";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark",
    secondary:
      "border border-primary bg-white text-primary hover:bg-light-green",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
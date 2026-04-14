import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "sm" | "icon";

function getVariantClasses(variant: ButtonVariant) {
  if (variant === "outline") {
    return "border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-100";
  }

  return "bg-slate-900 text-white hover:bg-slate-800";
}

function getSizeClasses(size: ButtonSize) {
  if (size === "sm") {
    return "h-9 px-3 text-sm";
  }

  if (size === "icon") {
    return "h-10 w-10 p-0";
  }

  return "h-10 px-4 py-2";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
        getVariantClasses(variant),
        getSizeClasses(size),
        className,
      )}
      {...props}
    />
  );
}

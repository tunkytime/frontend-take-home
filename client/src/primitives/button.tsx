import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type Props = PropsWithChildren<{
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}> &
  HTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  disabled = false,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        "hover:shadow-md transition-all px-4 h-8 flex items-center rounded-sm cursor-pointer font-medium text-sm border",
        variant === "primary" &&
          "border-purple-indicator bg-purple-indicator text-white",
        variant === "secondary" && "border-gray-7 bg-white",
        variant === "danger" && "border-red-a7/70 bg-red-surface text-red-a11",
        disabled && "pointer-events-none opacity-50"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

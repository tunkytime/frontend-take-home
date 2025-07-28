import { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Props = { withIcon?: boolean } & InputHTMLAttributes<HTMLInputElement>;

export function Input({ withIcon = false, value, onChange, ...rest }: Props) {
  return (
    <input
      {...rest}
      type="text"
      value={value}
      onChange={onChange}
      className={cn(
        "w-full border border-gray-a5 rounded-sm px-2 h-8 placeholder:text-gray-a9 text-sm focus:outline-purple-indicator",
        withIcon && "p1-8"
      )}
    />
  );
}

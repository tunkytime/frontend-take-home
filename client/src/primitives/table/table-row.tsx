import { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

type Props = {
  children: ReactNode;
  isLastRow?: boolean;
} & HTMLAttributes<HTMLTableRowElement>;

export function TableRow({ children, isLastRow = false, className }: Props) {
  return (
    <tr
      className={cn(
        "h-[44px] border-gray-6 border-t border-b",
        isLastRow && "border-b-0",
        className,
      )}
    >
      {children}
    </tr>
  );
}

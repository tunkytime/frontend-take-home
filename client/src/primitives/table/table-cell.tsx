import { ReactNode, TdHTMLAttributes } from "react";

import { cn } from "@utils/cn";

type Props = {
  children: ReactNode;
} & TdHTMLAttributes<HTMLTableCellElement>;

export function TableCell({ children, className, ...rest }: Props) {
  return (
    <td {...rest} className={cn("px-3", className)}>
      {children}
    </td>
  );
}

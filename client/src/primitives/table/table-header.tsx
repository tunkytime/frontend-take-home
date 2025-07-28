import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function TableHeader({ children }: Props) {
  return <th className="font-medium p-3 capitalize">{children}</th>;
}

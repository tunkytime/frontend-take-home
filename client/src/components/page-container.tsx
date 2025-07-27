import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageContainer({ children }: Props) {
  return <div className="flex flex-col gap-6 mt-6">{children}</div>;
}

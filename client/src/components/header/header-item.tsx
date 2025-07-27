import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

type Props = PropsWithChildren<{
  route: string;
  isActive: boolean;
}>;

export function HeaderItem({ route, isActive, children }: Props) {
  return (
    <Link to={route} className={`h-full w-[72px] text-center`}>
      <div
        className={cn(
          "p-2 text-sm text-gray-a11",
          isActive && "text-gray-12 font-medium"
        )}
      >
        {children}
      </div>
    </Link>
  );
}

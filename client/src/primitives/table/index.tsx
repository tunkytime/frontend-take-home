import { PropsWithChildren } from "react";

import { Button } from "@primitives/button";

import { TableHeader } from "./table-header";

type Props = PropsWithChildren<{
  headers: string[];
}>;

export function Table({ children, headers }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-6">
      <table className="text-left text-sm w-full relative">
        <tbody>
          <tr className="h-[40px] bg-gray-2">
            {headers.map((header) => (
              <TableHeader key={header}>{header}</TableHeader>
            ))}
            <th></th>
          </tr>
          {children}
        </tbody>
      </table>
    </div>
  );
}

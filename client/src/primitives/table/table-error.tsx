import { RefreshCw } from "react-feather";
import { mutate } from "swr";

import { Button } from "@primitives/button";
import { Table } from "@primitives/table";
import { TableCell } from "@primitives/table/table-cell";
import { TableRow } from "@primitives/table/table-row";

type Props = {
  cacheKey: "users" | "roles";
};

export function TableError({ cacheKey }: Props) {
  function handleRefresh() {
    mutate((key) => Array.isArray(key) && key.includes(cacheKey));
  }

  return (
    <Table headers={[]}>
      <TableRow className="h-[350px]">
        <TableCell className="text-center">
          <p className="text-lg text-gray-12">
            Failed to load data, please try again.
          </p>
          <Button
            onClick={() => handleRefresh()}
            className="inline-flex items-center gap-2 mt-2"
          >
            <RefreshCw size={16} /> Refresh
          </Button>
        </TableCell>
      </TableRow>
    </Table>
  );
}

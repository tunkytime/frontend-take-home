import { Loader } from "@components/loader";
import { Table } from "@primitives/table";
import { TableCell } from "@primitives/table/table-cell";
import { TableRow } from "@primitives/table/table-row";

export function TableLoading() {
  return (
    <Table headers={[]}>
      <TableRow className="h-[350px]">
        <TableCell>
          <Loader />
        </TableCell>
      </TableRow>
    </Table>
  );
}

import { useState } from "react";

import { Role } from "@api/types";
import { Loader } from "@components/loader";
import { NoResults } from "@components/no-results";
import { useRoles } from "@hooks/useRoles";
import { Table } from "@primitives/table";
import { TableCell } from "@primitives/table/table-cell";
import { TableError } from "@primitives/table/table-error";
import { TableRow } from "@primitives/table/table-row";

import { UpdateRoleDialog } from "../dialogs/update-role-dialog";
import { RoleOptions } from "../role-options";

const tableHeaders = ["name", "created", "default", "description"];

export function RoleTable() {
  const { roles, error, isLoading, isValidating } = useRoles();

  const [updatingRole, setUpdatingRole] = useState<Role | undefined>(undefined);
  const hasError = Boolean(error || (!isLoading && roles.length === 0));

  function openUpdatingRoleDialog(role: Role) {
    setUpdatingRole(role);
  }

  function closeUpdatingRoleDialog() {
    setUpdatingRole(undefined);
  }

  if (isLoading || isValidating) {
    return <Loader />;
  }

  if (hasError) {
    return <TableError cacheKey={"roles"} />;
  }

  if (roles.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      <Table headers={tableHeaders}>
        {roles.map((role, idx) => (
          <TableRow key={role.id} isLastRow={idx === roles.length - 1}>
            <TableCell>
              <div className="flex gap-2">{role.name}</div>
            </TableCell>
            <TableCell>{role.createdAt}</TableCell>
            <TableCell>{role.isDefault ? "Yes" : "No"}</TableCell>
            <TableCell>{role.description}</TableCell>
            <TableCell className="text-right">
              <RoleOptions open={() => openUpdatingRoleDialog(role)} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
      {updatingRole && (
        <UpdateRoleDialog
          role={updatingRole}
          isOpen={Boolean(updatingRole)}
          close={closeUpdatingRoleDialog}
        />
      )}
    </>
  );
}

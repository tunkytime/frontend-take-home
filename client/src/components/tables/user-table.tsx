import { useState } from "react";

import { User } from "@api/types";
import { Loader } from "@components/loader";
import { NoResults } from "@components/no-results";
import { useUserTableContext } from "@contexts/user-table-context";
import { Button } from "@primitives/button";
import { Table } from "@primitives/table";
import { TableCell } from "@primitives/table/table-cell";
import { TableRow } from "@primitives/table/table-row";

import { DeleteUserDialog } from "../dialogs/delete-user-dialog";
import { UserOptions } from "../user-options";
import { TableError } from "./table-error";

const tableHeaders = ["user", "role", "joined"];

export function UserTable() {
  const {
    usersWithRoles,
    hasError,
    isLoading,
    isValidating,
    prev,
    next,
    incrementPage,
    decrementPage,
  } = useUserTableContext();
  const [deletingUser, setDeletingUser] = useState<User | undefined>();

  function openDeleteUserDialog(user: User) {
    setDeletingUser(user);
  }

  function closeDeleteUserDialog() {
    setDeletingUser(undefined);
  }

  if (isLoading || isValidating) {
    return <Loader />;
  }

  if (hasError) {
    return <TableError cacheKey={"users"} />;
  }

  if (usersWithRoles.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      <Table headers={tableHeaders}>
        {usersWithRoles.map((user, idx) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex gap-2">
                {user?.photo && (
                  <img
                    src={user.photo}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
                <div>
                  {user.first} {user.last}
                </div>
              </div>
            </TableCell>
            <TableCell>{user?.role?.name}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
            <TableCell className="text-right">
              <UserOptions open={() => openDeleteUserDialog(user)} />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={4} className="text-right">
            <Button
              className="mr-2"
              variant="secondary"
              onClick={decrementPage}
              disabled={Boolean(!prev)}
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={incrementPage}
              disabled={Boolean(!next)}
            >
              Next
            </Button>
          </TableCell>
        </TableRow>
      </Table>
      {deletingUser && (
        <DeleteUserDialog
          isOpen={Boolean(deletingUser)}
          user={deletingUser}
          close={closeDeleteUserDialog}
        />
      )}
    </>
  );
}

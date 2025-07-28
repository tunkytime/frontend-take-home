import { Role, User } from "../api/types";
import { cn } from "../utils/cn";
import { useState } from "react";
import { DeleteUserDialog } from "./delete-user-dialog";
import { UserOptions } from "./user-options";

type Props = {
  users: (User & { role?: Role })[];
};

export function UsersTable({ users }: Props) {
  const [deletingUser, setDeletingUser] = useState<User | undefined>();

  function openDeleteUserDialog(user: User) {
    setDeletingUser(user);
  }

  function closeDeleteUserDialog() {
    setDeletingUser(undefined);
  }

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-6">
        <table className="text-left text-sm w-full">
          <tbody>
            <tr className="h-[40px] bg-gray-2">
              <th className="font-medium p-3">User</th>
              <th className="font-medium p-3">Role</th>
              <th className="font-medium p-3">Joined</th>
              <th></th>
            </tr>
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className={cn(
                  "h-[44px] border-gray-6 border-t border-b",
                  idx === users.length - 1 && "border-b-0"
                )}
              >
                <td className="p-3">
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
                </td>
                <td className="p-3">{user?.role?.name}</td>
                <td className="p-3">{user.createdAt}</td>
                <td className="p-3 text-right">
                  <UserOptions open={() => openDeleteUserDialog(user)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

import { MoreHorizontal } from "react-feather";
import { UserWithRole } from "../api/types";
import { cn } from "../utils/cn";

type Props = {
  users: UserWithRole[];
};

export function UsersTable({ users }: Props) {
  return (
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
                <button className="hover:bg-gray-a3 transition-colors rounded-full">
                  <MoreHorizontal className="text-gray-a11 cursor-pointer" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

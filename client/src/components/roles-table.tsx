import { Role, UserWithRole } from "../api/types";
import { cn } from "../utils/cn";
import { MoreHorizontal } from "react-feather";

type Props = {
  roles: Role[];
};

export function RolesTable({ roles }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-6">
      <table className="text-left text-sm w-full">
        <tbody>
          <tr className="h-[40px] bg-gray-2">
            <th className="font-medium p-3">Name</th>
            <th className="font-medium p-3">Created</th>
            <th className="font-medium p-3">Default?</th>
            <th className="font-medium p-3">Description</th>
            <th></th>
          </tr>
          {roles.map((role, idx) => (
            <tr
              key={role.id}
              className={cn(
                "h-[44px] border-gray-6 border-t border-b",
                idx === roles.length - 1 && "border-b-0"
              )}
            >
              <td className="p-3">
                <div className="flex gap-2">{role.name}</div>
              </td>
              <td className="p-3">{role.createdAt}</td>
              <td className="p-3">{role.isDefault ? "Yes" : "No"}</td>
              <td className="p-3">{role.description}</td>
              <td className="p-3">
                <button>
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

import { HTMLAttributes } from "react";
import { Search as SearchIcon } from "react-feather";

import { useUserTableContext } from "@contexts/user-table-context";
import { Input } from "@primitives/input";
import { cn } from "@utils/cn";

type Props = HTMLAttributes<HTMLDivElement>;

export function UserSearch({ className }: Props) {
  const { query, handleSearch } = useUserTableContext();

  return (
    <div className={cn("relative flex gap-2 w-full", className)}>
      <SearchIcon
        className="absolute text-gray-a11 top-1/2 -translate-y-1/2 left-2"
        size={16}
      />
      <Input
        withIcon
        placeholder="Search by name..."
        type="text"
        value={query}
        onChange={handleSearch}
        className="w-full border border-gray-a5 rounded-sm px-8 pr-1 h-8 placeholder:text-gray-a9 text-sm focus:outline-primary"
      />
    </div>
  );
}

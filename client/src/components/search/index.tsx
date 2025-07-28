import { ChangeEvent } from "react";
import { Search as SearchIcon } from "react-feather";
import { Input } from "../../primitives/input";

type Props = {
  value: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Search({ value, handleSearch }: Props) {
  return (
    <div className="relative flex gap-2">
      <SearchIcon
        className="absolute text-gray-a11 top-1/2 -translate-y-1/2 left-2"
        size={16}
      />
      <Input
        withIcon
        placeholder="Search by name..."
        type="text"
        value={value}
        onChange={handleSearch}
        className="w-full border border-gray-a5 rounded-sm px-8 pr-1 h-8 placeholder:text-gray-a9 text-sm focus:outline-purple-indicator"
      />
    </div>
  );
}

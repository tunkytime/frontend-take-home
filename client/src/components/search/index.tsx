import { ChangeEvent } from "react";

type Props = {
  value: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Search({ value, handleSearch }: Props) {
  return (
    <input
      placeholder="Search by name..."
      type="text"
      value={value}
      onChange={handleSearch}
    />
  );
}

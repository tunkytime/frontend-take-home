import { MoreHorizontal } from "react-feather";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

type Props = {
  open: () => void;
};

export function RoleOptions({ open }: Props) {
  return (
    <Popover>
      <PopoverButton
        aria-label="Role options"
        className="hover:bg-gray-a3 transition-colors rounded-full focus:bg-gray-a3 focus:outline-none"
      >
        <MoreHorizontal className="text-gray-a11 cursor-pointer" />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="py-2 flex flex-col bg-white rounded-lg shadow-2xl items-start"
      >
        <button
          onClick={open}
          className="py-1 px-5 hover:bg-gray-2 cursor-pointer transition-colors w-full text-left"
        >
          Edit role
        </button>
      </PopoverPanel>
    </Popover>
  );
}

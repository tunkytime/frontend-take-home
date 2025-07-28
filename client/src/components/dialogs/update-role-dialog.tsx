import { ChangeEvent, useState } from "react";
import { mutate } from "swr";

import { Role } from "@api/types";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "@primitives/button";
import { Input } from "@primitives/input";

type Props = {
  isOpen: boolean;
  role: Role;
  close: () => void;
};

export function UpdateRoleDialog({ isOpen, role, close }: Props) {
  const [roleName, setRoleName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function updateRole() {
    try {
      setIsLoading(true);
      await fetch(`/api/roles/${role.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: roleName,
        }),
      });
      mutate("roles");
      close();
    } catch (error) {
      console.error("Error updating role");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setRoleName(e.target.value);
  }

  return (
    <Dialog open={isOpen} as="div" onClose={close} className="z-10 relative">
      <div className="fixed inset-0 z-10 bg-black/60 w-screen">
        <div className="flex h-full items-center justify-center">
          <DialogPanel
            transition
            className="w-[520px] max-h-[690px] bg-white p-6 border-gray-a3 flex gap-4 flex-col rounded-xl duration-300 ease-out data-closed:opacity-0"
          >
            <DialogTitle className="text-xl font-medium text-gray-12">
              Update role
            </DialogTitle>
            <p>
              Current name: <strong>{role.name}</strong>
            </p>
            <p>
              New name:
              <Input
                placeholder="Role name"
                value={roleName}
                onChange={handleChange}
              />
            </p>
            <div className="flex gap-4 justify-end">
              <Button variant="secondary" onClick={close} disabled={isLoading}>
                Cancel
              </Button>
              <Button onClick={updateRole} disabled={isLoading}>
                Save
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

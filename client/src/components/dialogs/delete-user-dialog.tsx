import { useState } from "react";
import { useSWRConfig } from "swr";

import { User } from "@api/types";
import { useUserTableContext } from "@contexts/user-table-context";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "@primitives/button";

type Props = {
  isOpen: boolean;
  user: User;
  close: () => void;
};

export function DeleteUserDialog({ isOpen, user, close }: Props) {
  const { mutate } = useSWRConfig();
  const { query, page } = useUserTableContext();
  const [isLoading, setIsLoading] = useState(false);

  async function deleteUser() {
    try {
      setIsLoading(true);
      await fetch(`api/users/${user.id}`, { method: "DELETE" });
      console.log({ query, page });
      mutate(["users", query, page]);
      close();
    } catch (error) {
      console.error("Error deleting user");
    } finally {
      setIsLoading(false);
    }
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
              Delete user
            </DialogTitle>
            <p>
              Are you sure? The user{" "}
              <strong>
                {user.first} {user.last}
              </strong>{" "}
              will be permanantely deleted.
            </p>
            <div className="flex gap-4 justify-end">
              <Button variant="secondary" onClick={close} disabled={isLoading}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={deleteUser}
                disabled={isLoading}
              >
                Delete user
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

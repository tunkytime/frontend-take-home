import { Plus } from "react-feather";

import { UserTableContextProvider } from "@contexts/user-table-context";
import { Button } from "@primitives/button";

import { PageContainer } from "../components/page-container";
import { UserTable } from "../components/tables/user-table";
import { UserSearch } from "../components/user-search";

export function Users() {
  return (
    <PageContainer>
      <UserTableContextProvider>
        <div className="flex gap-2">
          <UserSearch className="flex-1" />
          <Button className="flex items-center gap-2">
            <Plus size={16} /> Add user
          </Button>
        </div>
        <UserTable />
      </UserTableContextProvider>
    </PageContainer>
  );
}

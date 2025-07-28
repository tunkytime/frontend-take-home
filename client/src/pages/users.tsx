import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { fetcher } from "../api";
import { PageContainer } from "../components/page-container";
import { Search } from "../components/search";
import { UsersTable } from "../components/users-table";
import useSWR from "swr";
import { useUsers } from "../hooks/useUsers";
import { useDebounce } from "use-debounce";
import { Loader } from "../components/loader";
import { NoResults } from "../components/no-results";
import { useRoles } from "../hooks/useRoles";

export function Users() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 250);
  const { users, error, isLoading } = useUsers(debouncedQuery);
  const { roles } = useRoles();
  const hasError = error || (!isLoading && !users);

  const usersWithRoles = useMemo(() => {
    return users.map((user) => ({
      ...user,
      role: roles.find(({ id }) => id === user.roleId),
    }));
  }, [users, roles]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const content = (() => {
    if (isLoading) {
      return <Loader />;
    }

    if (hasError) {
      return <>Something went wrong, please refresh the page.</>;
    }

    if (usersWithRoles.length === 0) {
      return <NoResults />;
    }

    return <UsersTable users={usersWithRoles} />;
  })();

  return (
    <PageContainer>
      <Search value={query} handleSearch={handleSearch} />
      {content}
    </PageContainer>
  );
}

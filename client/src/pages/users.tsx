import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { fetcher } from "../api";
import { RolesResponse, UsersResponse, UserWithRole } from "../api/types";
import { PageContainer } from "../components/page-container";
import { Search } from "../components/search";
import { UsersTable } from "../components/users-table";
import useSWR from "swr";
import { formatDate } from "../utils/formatDate";

export function Users() {
  const [query, setQuery] = useState("");
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useSWR<UsersResponse, Error>(
    `/api/users${query ? `?search=${query}` : ""}`,
    fetcher
  );
  const {
    data: rolesData,
    error: rolesError,
    isLoading: rolesLoding,
  } = useSWR<RolesResponse, Error>("/api/roles", fetcher);

  const users = usersData?.data || [];
  const roles = rolesData?.data || [];
  const isLoading = usersLoading || rolesLoding;
  const hasError = usersError || rolesError || (!isLoading && !usersData);

  const usersWithRoles = useMemo(
    () =>
      users.map((user) => ({
        ...user,
        createdAt: formatDate(user.createdAt),
        role: roles?.find((role) => role.id === user.roleId),
      })),
    [users, roles]
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const content = (() => {
    if (isLoading) {
      return <>Loading...</>;
    }

    if (hasError) {
      return <>Something went wrong, please refresh the page.</>;
    }

    if (usersWithRoles.length === 0) {
      return <>No results found.</>;
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

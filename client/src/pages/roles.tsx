import useSWR from "swr";

import { fetcher } from "../api";
import { RolesResponse } from "../api/types";
import { PageContainer } from "../components/page-container";
import { RoleTable } from "../components/tables/role-table";
import { formatDate } from "../utils/formatDate";

export function Roles() {
  const { data, error, isLoading } = useSWR<RolesResponse, Error>(
    "/api/roles",
    fetcher,
  );

  const roles = (data?.data || [])?.map((role) => ({
    ...role,
    createdAt: formatDate(role.createdAt),
  }));

  return (
    <PageContainer>
      <RoleTable roles={roles} />
    </PageContainer>
  );
}

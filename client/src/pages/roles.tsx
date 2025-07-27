import useSWR from "swr";
import { RolesResponse } from "../api/types";
import { PageContainer } from "../components/page-container";
import { fetcher } from "../api";
import { RolesTable } from "../components/roles-table";
import { formatDate } from "../utils/formatDate";

export function Roles() {
  const { data, error, isLoading } = useSWR<RolesResponse, Error>(
    "/api/roles",
    fetcher
  );

  const roles = (data?.data || [])?.map((role) => ({
    ...role,
    createdAt: formatDate(role.createdAt),
  }));

  return (
    <PageContainer>
      <RolesTable roles={roles} />
    </PageContainer>
  );
}

import useSWR from "swr";

import { fetcher } from "../api";
import { RolesResponse } from "../api/types";

export function useRoles() {
  const { data, error, isLoading } = useSWR<RolesResponse, Error>(
    "/api/roles",
    fetcher,
  );

  return {
    roles: data?.data || [],
    error,
    isLoading,
  };
}

import useSWR from "swr";
import { RolesResponse } from "../api/types";
import { fetcher } from "../api";

export function useRoles() {
  const { data, error, isLoading } = useSWR<RolesResponse, Error>(
    "/api/roles",
    fetcher
  );

  return {
    roles: data?.data || [],
    error,
    isLoading,
  };
}

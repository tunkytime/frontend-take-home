import useSWR from "swr";

import { formatDate } from "@utils/formatDate";

import { fetcher } from "../api";
import { RolesResponse } from "../api/types";

export function useRoles() {
  const { data, error, isLoading, isValidating } = useSWR<RolesResponse, Error>(
    ["roles"],
    fetchRoles,
  );

  async function fetchRoles() {
    return fetcher("/api/roles");
  }

  return {
    roles: (data?.data || [])?.map((role) => ({
      ...role,
      createdAt: formatDate(role.createdAt),
    })),
    error,
    isLoading,
    isValidating,
  };
}

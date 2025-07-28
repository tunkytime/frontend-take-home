import useSWR from "swr";

import { fetcher } from "../api";
import { UsersResponse } from "../api/types";

export function useUsers({ query, page }: { query: string; page: number }) {
  const { data, error, isLoading, isValidating } = useSWR<UsersResponse, Error>(
    ["users", query, page],
    fetchUsers,
  );

  async function fetchUsers() {
    const params = new URLSearchParams();

    if (query) {
      params.set("search", query);
    }

    if (page) {
      params.set("page", String(page));
    }

    return fetcher(`/api/users?${params.toString()}`);
  }

  return {
    users: data?.data || [],
    next: data?.next,
    prev: data?.prev,
    pages: data?.pages,
    error,
    isLoading,
    isValidating,
  };
}

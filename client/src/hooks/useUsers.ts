import useSWR from "swr";

import { fetcher } from "../api";
import { UsersResponse } from "../api/types";

export function useUsers({ query, page }: { query: string; page: string }) {
  const { data, error, isLoading, isValidating } = useSWR<UsersResponse, Error>(
    ["users", query, page],
    fetchUsers,
    {
      keepPreviousData: true,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnMount: false,
    },
  );

  async function fetchUsers() {
    const params = new URLSearchParams();

    if (query) {
      params.set("search", query);
    }

    if (page) {
      params.set("page", page);
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

import useSWR from "swr";
import { UsersResponse } from "../api/types";
import { fetcher } from "../api";

export function useUsers(query: string) {
  const searchParams = query ? `?search=${encodeURIComponent(query)}` : "";

  const { data, error, isLoading } = useSWR<UsersResponse, Error>(
    `/api/users${searchParams}`,
    fetcher
  );

  return {
    users: data?.data || [],
    error,
    isLoading,
  };
}

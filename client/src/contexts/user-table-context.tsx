import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

import { UserWithRole } from "@api/types";
import { useRoles } from "@hooks/useRoles";
import { useUsers } from "@hooks/useUsers";
import { formatDate } from "@utils/formatDate";

type UserTableContextValue = {
  query: string;
  page: string;
  usersWithRoles: UserWithRole[];
  hasError: boolean;
  isLoading: boolean;
  isValidating: boolean;
  next?: number | null;
  prev?: number | null;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  incrementPage: () => void;
  decrementPage: () => void;
};

const UserTableContext = createContext<UserTableContextValue | null>(null);

type Props = {
  children: ReactNode;
};

export function UserTableContextProvider({ children }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [debouncedQuery] = useDebounce(query, 250);
  const { users, next, prev, error, isLoading, isValidating } = useUsers({
    query: debouncedQuery,
    page: String(page),
  });
  const { roles } = useRoles();

  const usersWithRoles = useMemo(() => {
    return users.map((user) => ({
      ...user,
      createdAt: formatDate(user.createdAt),
      role: roles.find(({ id }) => id === user.roleId),
    }));
  }, [users, roles]);

  const hasError = Boolean(
    error || (!isLoading && usersWithRoles.length === 0 && !query),
  );

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function incrementPage() {
    setPage((prev) => prev + 1);
  }

  function decrementPage() {
    setPage((prev) => {
      if (prev - 1 <= 0) return prev;

      return prev - 1;
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (page) {
      params.set("page", String(page));
    } else {
      params.delete("page");
    }

    if (query) {
      params.set("search", query);
      params.delete("page");
    } else {
      params.delete("search");
    }

    navigate(`${location.pathname}?${params.toString()}`);
  }, [query, page, searchParams]);

  return (
    <UserTableContext.Provider
      value={{
        query,
        page: String(page),
        usersWithRoles,
        next,
        prev,
        hasError,
        isLoading,
        isValidating,
        handleSearch,
        incrementPage,
        decrementPage,
      }}
    >
      {children}
    </UserTableContext.Provider>
  );
}

export function useUserTableContext() {
  const userTableContext = useContext(UserTableContext);

  if (!userTableContext) {
    throw new Error(
      "useUserTableContext must be used within a UserTableContextProvider",
    );
  }

  return userTableContext;
}

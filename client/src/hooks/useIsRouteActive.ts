import { useLocation } from "react-router-dom";

export function useIsRouteActive() {
  const location = useLocation();

  function isRouteActive(route: string) {
    return location.pathname === `/${route}`;
  }

  return {
    isRouteActive,
  };
}

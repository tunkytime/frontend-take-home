import { useIsRouteActive } from "@hooks/useIsRouteActive";
import { routes } from "@routes";

import { ActiveIndicator } from "./active-indicator";
import { HeaderItem } from "./header-item";

export function Header() {
  const { isRouteActive } = useIsRouteActive();
  const isUsersActive = isRouteActive(routes.users);
  const isRolesActive = isRouteActive(routes.roles);

  return (
    <header className="flex h-[40px] items-center relative border-b border-b-gray-6">
      <HeaderItem route={routes.users} isActive={isUsersActive}>
        Users
      </HeaderItem>
      <HeaderItem route={routes.roles} isActive={isRolesActive}>
        Roles
      </HeaderItem>
      <ActiveIndicator
        isUsersActive={isUsersActive}
        isRolesActive={isRolesActive}
      />
    </header>
  );
}

import { cn } from "../../utils/cn";

type Props = {
  isUsersActive: boolean;
  isRolesActive: boolean;
};

export function ActiveIndicator({ isUsersActive, isRolesActive }: Props) {
  return (
    <div
      className={cn(
        `absolute h-[2px] bottom-0 w-[72px] bg-purple-indicator transition-transform`,
        isUsersActive && "translate-x-0",
        isRolesActive && `translate-x-[72px]`
      )}
    />
  );
}

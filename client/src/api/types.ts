export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string;
  photo?: string;
};

export type UsersResponse = {
  data: User[];
  next: number | null;
  pages: number | null;
  prev: number | null;
};

export type Role = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description?: string;
  isDefault: boolean;
};

export type RolesResponse = {
  data: Role[];
  next: number | null;
  pages: number | null;
  prev: number | null;
};

export type UserWithRole = User & { role?: Role };

import { createBrowserRouter } from "react-router-dom";

import { UserTableContextProvider } from "@contexts/user-table-context";

import { Layout } from "./components/layout";
import { Roles } from "./pages/roles";
import { Users } from "./pages/users";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      { path: routes.users, element: <Users /> },
      { path: routes.roles, element: <Roles /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import { Users } from "./pages/users";
import { Roles } from "./pages/roles";
import { routes } from "./routes";
import { Layout } from "./components/layout";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Layout />,
    children: [
      { index: true, element: <Root /> },
      { path: routes.users, element: <Users /> },
      { path: routes.roles, element: <Roles /> },
    ],
  },
]);

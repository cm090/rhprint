import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import ExtensionMissingError from "../errors/ExtensionMissingError";
import PageNotFoundError from "../errors/PageNotFoundError";
import LogIn from "../logIn/LogIn";
import ExtensionCheck from "./ExtensionCheck";

const RouteHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ExtensionCheck>
          <Dashboard />
        </ExtensionCheck>
      ),
      errorElement: <PageNotFoundError />,
    },
    {
      path: "/extension-missing",
      element: <ExtensionMissingError />,
    },
    {
      path: "/login",
      element: (
          <ExtensionCheck>
            <LogIn />
          </ExtensionCheck>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouteHandler;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import PrinterList from "../dashboard/printers/PrinterList";
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
          <Dashboard page="home">
            <PrinterList />
          </Dashboard>
        </ExtensionCheck>
      ),
      errorElement: <PageNotFoundError />,
    },
    {
      path: "/queue",
      element: (
        <ExtensionCheck>
          <Dashboard page="queue">
            <h1>Queue</h1>
          </Dashboard>
        </ExtensionCheck>
      ),
    },
    {
      path: "/help",
      element: (
        <ExtensionCheck>
          <Dashboard page="help">
            <h1>How to print</h1>
          </Dashboard>
        </ExtensionCheck>
      ),
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

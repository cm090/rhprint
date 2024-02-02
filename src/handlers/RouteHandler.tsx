import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExtensionMissingError from "../errors/ExtensionMissingError";
import PageNotFoundError from "../errors/PageNotFoundError";
import LogIn from "../logIn/LogIn";
import App from "../printerList/PrinterList";
import ExtensionCheck from "./ExtensionCheck";

const RouteHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ExtensionCheck />
          <App />
        </>
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
        <>
          <ExtensionCheck />
          <LogIn />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouteHandler;

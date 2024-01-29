import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExtensionMissingError from "../errors/ExtensionMissingError";
import PageNotFoundError from "../errors/PageNotFoundError";
import LogIn from "../logIn/LogIn";
import App from "../printerList/PrinterList";

const RouteHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <PageNotFoundError />,
    },
    {
      path: "/extension-missing",
      element: <ExtensionMissingError />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouteHandler;
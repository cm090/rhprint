import { CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { apiHeartbeat } from "../apiConnector/papercutApi";

const ExtensionCheck = ({ children }: { children: JSX.Element }) => {
  const [apiReady, setApiReady] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("apiReady", () => {
      setApiReady(true);
      apiHeartbeat(nav);
    });
    if (apiReady) {
      return;
    }
    setTimeout(() => {
      setApiReady((status) => {
        if (!status) {
          nav("/extension-missing");
        }
        return status;
      });
    }, 1000);
  }, [apiReady, nav]);

  return apiReady ? (
    children
  ) : (
    <>
      <Helmet>
        <title>Loading... | RHprint</title>
      </Helmet>
      <div className="pos-middle">
        <CircularProgress size="lg" />
      </div>
    </>
  );
};

export default ExtensionCheck;

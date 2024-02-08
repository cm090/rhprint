import { CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { apiHeartbeat, extensionCheck } from "../apiConnector/papercutApi";

const ExtensionCheck = ({ children }: { children: JSX.Element }) => {
  const [apiReady, setApiReady] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    extensionCheck(nav);
    window.addEventListener("apiReady", () => {
      apiHeartbeat().then(() => setApiReady(true));
    });
  }, [nav]);

  return apiReady ? (
    children
  ) : (
    <>
      <Helmet>
        <title>Loading | RHprint</title>
      </Helmet>
      <div className="pos-middle flex-center">
        <CircularProgress size="lg" />
      </div>
    </>
  );
};

export default ExtensionCheck;

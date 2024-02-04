import { CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";
import { apiHeartbeat } from "../apiConnector/papercutApi";

const ExtensionCheck = ({ children }: { children: JSX.Element }) => {
  const [apiReady, setApiReady] = useState(false);
  window.addEventListener("apiReady", () => {
    setApiReady(true);
    apiHeartbeat();
  });

  useEffect(() => {
    if (apiReady) {
      return;
    }
    setTimeout(() => {
      setApiReady((status) => {
        if (!status) {
          window.location.href = "/extension-missing";
        }
        return status;
      });
    }, 1000);
  }, [apiReady]);

  return apiReady ? (
    children
  ) : (
    <div className="pos-middle">
      <CircularProgress size="lg" />
    </div>
  );
};

export default ExtensionCheck;

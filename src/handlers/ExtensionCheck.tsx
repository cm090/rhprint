import { Box, CircularProgress, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
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
      <MainLoader className="pos-middle" />
    </>
  );
};

const MainLoader = ({ className }: { className?: string }) => (
  <div className={`flex-center ${className}`}>
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress size="lg" />
      <Typography level="title-lg" sx={{ mt: 2 }}>
        Loading RHprint
      </Typography>
      <Typography level="title-sm" sx={{ color: "text.secondary" }}>
        Taking too long?{" "}
        <Link to="/" className="help-link" reloadDocument>
          Reload
        </Link>
      </Typography>
    </Box>
  </div>
);

export { MainLoader };
export default ExtensionCheck;

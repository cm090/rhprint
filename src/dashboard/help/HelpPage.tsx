import Box from "@mui/joy/Box";
import { useEffect } from "react";
import HelpDetails from "./HelpDetails";
import HelpNav from "./HelpNav";

const Help = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash.slice(1));
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", window.location.pathname);
      }, 500);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
      }}
    >
      <HelpNav />
      <HelpDetails />
    </Box>
  );
};

export default Help;

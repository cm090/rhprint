import { Box } from "@mui/joy";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";

const titleMap: { [key: string]: string } = {
  home: "Home",
  help: "How to print",
};

const Dashboard = ({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) => (
  <Box
    sx={{
      bgcolor: "background.appBody",
      display: "grid",
      gridTemplateRows: "64px 1fr",
      minHeight: "100vh",
    }}
  >
    <Helmet>
      <title>{titleMap[page] || "Dashboard"} | RHprint</title>
    </Helmet>
    <Navigation page={page} />
    {children}
  </Box>
);

export default Dashboard;

import { Box } from "@mui/joy";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";

const Dashboard = ({ children, page }: { children: React.ReactNode, page: string }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.appBody",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(64px, 200px) minmax(450px, 1fr)",
          md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
        },
        gridTemplateRows: "64px 1fr",
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <title>Dashboard | RHprint</title>
      </Helmet>
      <Navigation page={page} />
      {children}
    </Box>
  );
};

export default Dashboard;

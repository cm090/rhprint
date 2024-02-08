import { Box } from "@mui/joy";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import PrinterList from "./PrinterList";

const Dashboard = () => {
  const [index, setIndex] = useState(0);

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
      <Navigation index={index} setIndex={setIndex} />
      {index === 0 && (
        <Box
          sx={{
            p: 2,
            bgcolor: "background.surface",
            borderRight: "1px solid",
            borderColor: "divider",
            maxHeight: "calc(100vh - 64px)", overflowY: "scroll"
          }}
        >
          <PrinterList />
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;

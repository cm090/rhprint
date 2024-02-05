import Grid from "@mui/joy/Grid";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import PrinterList from "./PrinterList";

const Dashboard = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Dashboard | RHprint</title>
      </Helmet>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={4}>
          <Navigation index={index} setIndex={setIndex} />
        </Grid>
        <Grid xs={8}>{index === 0 && <PrinterList />}</Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

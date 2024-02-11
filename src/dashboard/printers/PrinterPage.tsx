import { Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { performListJobs } from "../../apiConnector/papercutApi";
import "../styles.css";
import PrinterDetails from "./PrinterDetails";
import PrinterList from "./PrinterList";

const PrinterInfo = () => {
  const [ready, setReady] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState<PrinterDetails>(
    {} as PrinterDetails
  );
  const [jobs, setJobs] = useState<PrintDocument[]>([]);
  const [hasJobs, setHasJobs] = useState(false);
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    if (hasJobs) {
      return;
    }
    performListJobs(
      user,
      `${selectedPrinter.serverName}\\${selectedPrinter.printerName}`
    ).then((data: ApiResult) => {
      setJobs(data.result as PrintDocument[]);
      setHasJobs(true);
    });
  }, [selectedPrinter, user, hasJobs]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
      }}
    >
      <PrinterList
        selected={selectedPrinter}
        setSelected={setSelectedPrinter}
        ready={ready}
        setReady={setReady}
      />
      <PrinterDetails
        printer={selectedPrinter}
        jobs={jobs}
        refresh={() => setHasJobs(false)}
        ready={ready}
      />
    </Box>
  );
};

export default PrinterInfo;

import { Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { performListJobs } from "../../apiConnector/papercutApi";
import PrinterDetails from "./PrinterDetails";
import PrinterList from "./PrinterList";

const PrinterInfo = () => {
  const [ready, setReady] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState<PrinterDetails>(
    {} as PrinterDetails
  );
  const [jobs, setJobs] = useState<PrintDocument[]>([]);
  const [hasJobs, setHasJobs] = useState<boolean>(false);
  const [removed, setRemoved] = useState<string>("");
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    if (hasJobs) {
      return;
    }
    const createList = () => {
      performListJobs(
        user,
        `${selectedPrinter.serverName}\\${selectedPrinter.printerName}`
      ).then((data: ApiResult) => {
        const res = data.result as PrintDocument[];
        if (removed !== "") {
          if (res.some((item: PrintDocument) => item.id === removed)) {
            setTimeout(createList, 500);
            return;
          }
        }
        setJobs(res);
        setRemoved("");
        setHasJobs(true);
      });
    };
    createList();
  }, [selectedPrinter, user, hasJobs, removed]);

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
        refresh={(id?: string) => {
          if (id) {
            setRemoved(id);
          }
          setHasJobs(false);
        }}
        ready={ready}
      />
    </Box>
  );
};

export default PrinterInfo;

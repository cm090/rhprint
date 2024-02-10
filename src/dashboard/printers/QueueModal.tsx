import { Box, Typography } from "@mui/joy";
import { useState, useEffect } from "react";
import { performListJobs } from "../../apiConnector/papercutApi";
import QueueItem from "./QueueItem";

const QueueModal = ({ printer }: { printer: PrinterDetails }) => {
  const [queue, setQueue] = useState<PrintDocument[]>([]);
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    performListJobs(user, `${printer.serverName}\\${printer.printerName}`).then(
      (data: ApiResult) => {
        setQueue(data.result as PrintDocument[]);
      }
    );
  }, [user, printer]);

  return (
    <Box>
      {!!queue.length ? (
        queue.map((job: PrintDocument) => <QueueItem key={job.id} data={job} />)
      ) : (
        <Typography level="body-md" sx={{ ml: 2 }}>
          No jobs
        </Typography>
      )}{" "}
    </Box>
  );
};

export default QueueModal;

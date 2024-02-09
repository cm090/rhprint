import { Box, CircularProgress, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { performListJobs } from "../../apiConnector/papercutApi";
import QueueItem from "./QueueItem";

const PrinterDetails = ({ printer }: { printer: PrinterDetails }) => {
  const [isReady, setIsReady] = useState(false);
  const [queue, setQueue] = useState<PrintDocument[]>([]);
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    setIsReady(false);
    performListJobs(user, `${printer.serverName}\\${printer.printerName}`).then(
      (data: ApiResult) => {
        setQueue(data.result as PrintDocument[]);
        setIsReady(true);
      }
    );
  }, [user, printer]);

  return (
    <Box sx={{ p: 2 }}>
      {isReady ? (
        <Box>
          <Box sx={{ m: 2 }}>
            <Typography level="h3">{printer.printerName}</Typography>
            {printer.location && (
              <Typography level="body-sm">{printer.location}</Typography>
            )}
          </Box>
          {!!queue.length ? (
            queue.map((job: PrintDocument) => (
              <QueueItem key={job.id} data={job} />
            ))
          ) : (
            <Typography level="body-md" sx={{ ml: 2 }}>
              No jobs
            </Typography>
          )}
        </Box>
      ) : (
        <Box className="flex-center">
          <div>
            <CircularProgress />
          </div>
        </Box>
      )}
    </Box>
  );
};

export default PrinterDetails;

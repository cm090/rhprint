import { Box, CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";
import { performListJobs } from "../../apiConnector/papercutApi";

const PrinterDetails = ({ printerName }: { printerName: string }) => {
  const [isReady, setIsReady] = useState(false);
  const [queue, setQueue] = useState<PrintDocument[]>([]);
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    performListJobs(user, printerName).then((data: ApiResult) => {
      setQueue(data.result as PrintDocument[]);
      setIsReady(true);
    });
  }, [user, printerName]);

  return (
    <Box sx={{ p: 2 }}>
      {isReady ? (
        <Box>
          {printerName}
          {!!queue.length &&
            queue.map((job: PrintDocument) => (
              <Box key={job.id} sx={{ p: 2 }}>
                {job.documentName} <br />
                {job.totalPages} pages <br />
                {job.copies} copies <br />
                {job.paperSizeFormatted} <br />
                {job.usageTimeFormatted} <br />
              </Box>
            ))}
        </Box>
      ) : (
        <Box className="flex-center" sx={{ width: "100%" }}>
          <div>
            <CircularProgress />
          </div>
        </Box>
      )}
    </Box>
  );
};

export default PrinterDetails;

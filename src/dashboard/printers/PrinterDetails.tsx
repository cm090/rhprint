import { Map, Refresh } from "@mui/icons-material";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/joy";
import { useState } from "react";
import { Link } from "react-router-dom";
import maps from "../../img/maps";
import MapModal from "./MapModal";
import QueueItem from "./QueueItem";

const queues: {
  [key: string]: string;
} = {
  "hmu100-ricoh": "RHIT Ricoh Printing",
  "Library 3": "RHIT Library Color Printing",
};

const PrinterDetails = ({
  printer,
  jobs,
  refresh,
  ready,
}: {
  printer: PrinterDetails;
  jobs: PrintDocument[];
  refresh: () => void;
  ready: boolean;
}) => {
  return (
    <Box sx={{ p: 3, maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
      {ready ? (
        <>
          {queues[printer.printerName] && <QueueAlert printer={printer} />}
          <Details printer={printer} jobs={jobs} refresh={refresh} />
        </>
      ) : (
        <div className="flex-center">
          <CircularProgress size="lg" />
        </div>
      )}
    </Box>
  );
};

const Details = ({
  printer,
  jobs,
  refresh,
}: {
  printer: PrinterDetails;
  jobs: PrintDocument[];
  refresh: () => void;
}) => {
  const [mapVisible, setMapVisible] = useState(false);

  let printerMap;
  try {
    printerMap =
      maps[
        printer.printerName.replace(
          new RegExp(" |-", "g"),
          ""
        ) as keyof typeof maps
      ];
  } catch (e) {}

  return (
    <>
      <Typography level="h3">{printer.printerName}</Typography>
      {printer.location && (
        <Typography level="body-sm">{printer.location}</Typography>
      )}
      <br />
      {printerMap && (
        <>
          <Button
            color="primary"
            onClick={() => setMapVisible(!mapVisible)}
            sx={{ mr: 2 }}
          >
            <Map sx={{ mr: 1 }} /> {mapVisible ? "Hide" : "Show"} map
          </Button>
          {mapVisible && (
            <MapModal printerMap={printerMap} setMapVisible={setMapVisible} />
          )}
        </>
      )}
      <Button color="primary" variant="outlined" onClick={refresh}>
        <Refresh sx={{ mr: 1 }} /> Refresh queue
      </Button>
      <Box>
        {!!jobs.length ? (
          jobs
            .filter(
              (job: PrintDocument) =>
                job.printerName ===
                (queues[printer.printerName] || "RHIT BW Printing")
            )
            .map((job: PrintDocument) => (
              <QueueItem
                key={job.id}
                data={job}
                printer={printer}
                refresh={refresh}
              />
            ))
        ) : (
          <Typography level="body-md" sx={{ mt: 2 }}>
            No jobs. <Link to="/help#printing" className="help-link">Learn how to create one</Link>.
          </Typography>
        )}{" "}
      </Box>
    </>
  );
};

const QueueAlert = ({ printer }: { printer: PrinterDetails }) => {
  return (
    <Alert color="warning" sx={{ mb: 2 }}>
      This printer requires you to send jobs to a different queue. Please print
      to {queues[printer.printerName]}.
    </Alert>
  );
};

export default PrinterDetails;

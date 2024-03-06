import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";
import { useState } from "react";
import {
  performCancelPrints,
  performReleasePrints,
} from "../../apiConnector/papercutApi";

const QueueItem = ({
  data,
  printer,
  refresh,
}: {
  data: PrintDocument;
  printer: PrinterDetails;
  refresh: (id?: string) => void;
}) => {
  const [action, setAction] = useState<"print" | "cancel" | "">("");
  const user = localStorage.getItem("user") as string;

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Typography level="title-lg">{data.documentName}</Typography>
        <Typography>
          {data.totalPages} page{data.totalPages > 1 ? "s" : ""}, {data.copies}{" "}
          cop{data.copies > 1 ? "ies" : "y"}
        </Typography>
        <Typography>
          Paper size:{" "}
          {data.paperSizeFormatted.substring(0, 1) +
            data.paperSizeFormatted.substring(1).toLowerCase()}
        </Typography>
        <Typography>Sent at {data.usageTimeFormatted}</Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Button
          variant="solid"
          color="primary"
          disabled={action !== ""}
          loading={action === "print"}
          onClick={() => {
            setAction("print");
            performReleasePrints(
              user,
              `${printer.serverName}\\${printer.printerName}`,
              [data.id]
            ).then((res) => {
              if (
                res.result.success ||
                res.result.statusMessage === "success"
              ) {
                setTimeout(() => {
                  refresh(data.id);
                }, 1000);
              }
            });
          }}
        >
          Print
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          disabled={action !== ""}
          loading={action === "cancel"}
          onClick={() => {
            setAction("cancel");
            performCancelPrints(user, [data.id]).then((res) => {
              if (res.result.success) {
                setTimeout(() => {
                  refresh(data.id);
                }, 1000);
              }
            });
          }}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default QueueItem;

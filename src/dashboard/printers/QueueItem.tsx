import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";
import { performCancelPrints } from "../../apiConnector/papercutApi";

const QueueItem = ({ data }: { data: PrintDocument }) => {
  const user = localStorage.getItem("user") as string;

  return (
    <Card variant="outlined">
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
        <Button variant="solid" color="primary">
          Print
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() =>
            performCancelPrints(user, [data.id]).then((res) => {
              if (res.result.success) {
                window.location.reload();
              }
            })
          }
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default QueueItem;

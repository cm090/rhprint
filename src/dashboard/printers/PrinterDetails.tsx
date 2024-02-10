import { Box, Button, Typography } from "@mui/joy";
import maps from "../../img/maps";

const PrinterDetails = ({ printer }: { printer: PrinterDetails }) => {
  let printerMap;
  try {
    printerMap =
      maps[
        printer.printerName
          .replace(" ", "")
          .replace("-", "") as keyof typeof maps
      ];
  } catch (e) {}

  return (
    <Box
      sx={{ m: 2, p: 2, maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
    >
      <Typography level="h3">{printer.printerName}</Typography>
      {printer.location && (
        <Typography level="body-sm">{printer.location}</Typography>
      )}
      {printerMap && (
        <img src={printerMap} alt={printer.printerName} width="70%" />
      )}
      <br />
      <Button color="primary">Open queue</Button>
    </Box>
  );
};

export default PrinterDetails;

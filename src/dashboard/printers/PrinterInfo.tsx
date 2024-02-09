import { useState } from "react";
import "../styles.css";
import PrinterDetails from "./PrinterDetails";
import PrinterList from "./PrinterList";
import { Box } from "@mui/joy";

const PrinterInfo = () => {
  const [selectedPrinter, setSelectedPrinter] = useState<string>("");

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:
          "280px 1fr",
      }}
    >
      <PrinterList
        selected={selectedPrinter}
        setSelected={setSelectedPrinter}
      />
      <PrinterDetails printerName={selectedPrinter} />
    </Box>
  );
};

export default PrinterInfo;

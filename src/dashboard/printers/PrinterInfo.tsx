import { useState } from "react";
import "../styles.css";
import PrinterDetails from "./PrinterDetails";
import PrinterList from "./PrinterList";

const PrinterInfo = () => {
  const [selectedPrinter, setSelectedPrinter] = useState<string>("");

  return (
    <>
      <PrinterList
        selected={selectedPrinter}
        setSelected={setSelectedPrinter}
      />
      <PrinterDetails printerName={selectedPrinter} />
    </>
  );
};

export default PrinterInfo;

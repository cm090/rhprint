import { Typography } from "@mui/joy";

const Printer = ({ details }: { details: PrinterDetails }) => {
  return <Typography>{details.printerName}</Typography>;
};

export default Printer;

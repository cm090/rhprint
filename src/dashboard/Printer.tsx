import { ListItemButton, ListItemContent } from "@mui/joy";

const Printer = ({ details }: { details: PrinterDetails }) => {
  return (
    <ListItemButton>
      <ListItemContent>{details.printerName}</ListItemContent>
    </ListItemButton>
  );
};

export default Printer;

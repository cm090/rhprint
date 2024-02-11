import { ListItemButton, ListItemContent } from "@mui/joy";

const Printer = ({
  details,
  selected,
  setSelected,
}: {
  details: PrinterDetails;
  selected: boolean;
  setSelected: (printer: PrinterDetails) => void;
}) => {
  return (
    <ListItemButton selected={selected} onClick={() => setSelected(details)}>
      <ListItemContent>{details.printerName}</ListItemContent>
    </ListItemButton>
  );
};

export default Printer;

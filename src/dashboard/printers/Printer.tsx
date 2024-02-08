import { ListItemButton, ListItemContent } from "@mui/joy";

const Printer = ({
  details,
  selected,
  setSelected,
}: {
  details: PrinterDetails;
  selected: boolean;
  setSelected: (printerName: string) => void;
}) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={() =>
        setSelected(`${details.serverName}\\${details.printerName}`)
      }
    >
      <ListItemContent>{details.printerName}</ListItemContent>
    </ListItemButton>
  );
};

export default Printer;

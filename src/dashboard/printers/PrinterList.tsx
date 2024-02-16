import { SearchRounded } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Input,
  List,
  ListItem,
  ListSubheader,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  performGetAllPrinters,
  performGetRecentPrinters,
} from "../../apiConnector/papercutApi";
import Printer from "./Printer";

const PrinterList = ({
  selected,
  setSelected,
  ready,
  setReady,
}: {
  selected: PrinterDetails;
  setSelected: (printer: PrinterDetails) => void;
  ready: boolean;
  setReady: (ready: boolean) => void;
}) => {
  const [recentPrinters, setRecentPrinters] = useState<PrinterDetails[]>([]);
  const [popularPrinters, setPopularPrinters] = useState<PrinterDetails[]>([]);
  const [allPrinters, setAllPrinters] = useState<PrinterDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const user = localStorage.getItem("user") as string;
  const nav = useNavigate();

  useEffect(() => {
    if (ready) {
      return;
    }
    performGetRecentPrinters(user)
      .then((e: ApiResult) => {
        if (e.result.error) {
          return Promise.reject(e.result.error);
        }
        if (e.result.recentPrinters) {
          setRecentPrinters(e.result.recentPrinters);
          const firstPrinter = e.result.recentPrinters[0];
          setSelected(firstPrinter);
        }
        if (e.result.popularPrinters) {
          setPopularPrinters(e.result.popularPrinters);
        }
        return performGetAllPrinters(user);
      })
      .then((e: ApiResult) => {
        if (e.result.error) {
          return Promise.reject(e.result.error);
        }
        setAllPrinters(e.result as unknown as PrinterDetails[]);
        setReady(true);
      })
      .catch((err: string) => {
        if (err === "Forbidden") {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          nav("/login");
        }
      });
  }, [user, setSelected, ready, setReady, nav]);

  return (
    <Box
      className="sidebar"
      sx={{
        p: 2,
        bgcolor: "background.surface",
        borderRight: "1px solid",
        borderColor: "divider",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "scroll",
      }}
    >
      {!ready ? (
        <div className="flex-center">
          <CircularProgress size="lg" />
        </div>
      ) : (
        <List
          size="sm"
          sx={{
            "--ListItem-radius": "var(--joy-radius-sm)",
            "--List-gap": "4px",
          }}
        >
          <Input
            size="sm"
            variant="outlined"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            startDecorator={<SearchRounded />}
            sx={{ alignSelf: "center" }}
          />
          {searchTerm === "" ? (
            <>
              <ListItem nested>
                <ListSubheader sx={{ fontWeight: "800" }}>Recent</ListSubheader>
                {recentPrinters.map((printer: PrinterDetails) => (
                  <Printer
                    details={printer as unknown as PrinterDetails}
                    key={`recent-${printer.printerName}`}
                    selected={selected.printerName === printer.printerName}
                    setSelected={setSelected}
                  />
                ))}
              </ListItem>
              <ListItem nested>
                <ListSubheader sx={{ fontWeight: "800" }}>
                  Popular
                </ListSubheader>
                {popularPrinters.map((printer: PrinterDetails) => (
                  <Printer
                    details={printer as unknown as PrinterDetails}
                    key={`popular-${printer.printerName}`}
                    selected={selected.printerName === printer.printerName}
                    setSelected={setSelected}
                  />
                ))}
              </ListItem>
              <ListItem nested>
                <ListSubheader sx={{ fontWeight: "800" }}>All</ListSubheader>
                {allPrinters.map((printer: PrinterDetails) => (
                  <Printer
                    details={printer as unknown as PrinterDetails}
                    key={`all-${printer.printerName}`}
                    selected={selected.printerName === printer.printerName}
                    setSelected={setSelected}
                  />
                ))}
              </ListItem>
            </>
          ) : (
            <ListItem nested>
              <ListSubheader sx={{ fontWeight: "800" }}>Results</ListSubheader>
              {allPrinters
                .filter((p) => p.printerName.toLowerCase().includes(searchTerm))
                .map((printer: PrinterDetails) => (
                  <Printer
                    details={printer as unknown as PrinterDetails}
                    key={`all-${printer.printerName}`}
                    selected={selected.printerName === printer.printerName}
                    setSelected={setSelected}
                  />
                ))}
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
};

export default PrinterList;

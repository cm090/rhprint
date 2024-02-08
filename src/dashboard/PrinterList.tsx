import { SearchRounded } from "@mui/icons-material";
import { Input, List, ListItem, ListSubheader } from "@mui/joy";
import { useEffect, useState } from "react";
import {
  performGetAllPrinters,
  performGetRecentPrinters,
} from "../apiConnector/papercutApi";
import Printer from "./Printer";
import "./styles.css";

const PrinterList = () => {
  const [recentPrinters, setRecentPrinters] = useState<PrinterDetails[]>([]);
  const [popularPrinters, setPopularPrinters] = useState<PrinterDetails[]>([]);
  const [allPrinters, setAllPrinters] = useState<PrinterDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    performGetRecentPrinters(user)
      .then((e: ApiResult) => {
        if (e.result.error) {
          return Promise.reject(e.result.error);
        }
        if (e.result.recentPrinters) {
          setRecentPrinters(e.result.recentPrinters);
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
      })
      .catch((err: string) => console.log(err));
  }, [user]);

  return !recentPrinters.length ||
    !popularPrinters.length ||
    !allPrinters.length ? (
    <div>Loading...</div>
  ) : (
    <List
      size="sm"
      sx={{ "--ListItem-radius": "var(--joy-radius-sm)", "--List-gap": "4px" }}
    >
      <Input
        size="sm"
        variant="outlined"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        startDecorator={<SearchRounded />}
        sx={{
          alignSelf: "center",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      />
      {searchTerm === "" ? (
        <>
          <ListItem nested>
            <ListSubheader sx={{ fontWeight: "800" }}>Recent</ListSubheader>
            {recentPrinters.map((printer: PrinterDetails) => (
              <Printer
                details={printer as unknown as PrinterDetails}
                key={`recent-${printer.printerName}`}
              />
            ))}
          </ListItem>
          <ListItem nested>
            <ListSubheader sx={{ fontWeight: "800" }}>Popular</ListSubheader>
            {popularPrinters.map((printer: PrinterDetails) => (
              <Printer
                details={printer as unknown as PrinterDetails}
                key={`popular-${printer.printerName}`}
              />
            ))}
          </ListItem>
          <ListItem nested>
            <ListSubheader sx={{ fontWeight: "800" }}>All</ListSubheader>
            {allPrinters.map((printer: PrinterDetails) => (
              <Printer
                details={printer as unknown as PrinterDetails}
                key={`all-${printer.printerName}`}
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
              />
            ))}
        </ListItem>
      )}
    </List>
  );
};

export default PrinterList;

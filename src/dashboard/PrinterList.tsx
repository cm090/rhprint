import { Typography } from "@mui/joy";
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
    <>
      <Typography level="h3">Recent Printers</Typography>
      {recentPrinters.map((printer: PrinterDetails) => (
        <Printer
          details={printer as unknown as PrinterDetails}
          key={`recent-${printer.printerName}`}
        />
      ))}
      <Typography level="h3">Popular Printers</Typography>
      {popularPrinters.map((printer: PrinterDetails) => (
        <Printer
          details={printer as unknown as PrinterDetails}
          key={`popular-${printer.printerName}`}
        />
      ))}
      <Typography level="h3">All Printers</Typography>
      {allPrinters.map((printer: PrinterDetails) => (
        <Printer
          details={printer as unknown as PrinterDetails}
          key={`all-${printer.printerName}`}
        />
      ))}
    </>
  );
};

export default PrinterList;

import { Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import "./styles.css";
import {
  performGetAllPrinters,
  performGetRecentPrinters,
  setListener,
} from "../apiConnector/papercutApi";
import Printer from "./Printer";

const PrinterList = () => {
  const [recentPrinters, setRecentPrinters] = useState<string[]>([]);
  const [popularPrinters, setPopularPrinters] = useState<string[]>([]);
  const [allPrinters, setAllPrinters] = useState<string[]>([]);
  const user = localStorage.getItem("user") as string;

  useEffect(() => {
    setListener((e: ApiResult) => {
      if (e.recentPrinters) {
        setRecentPrinters(e.recentPrinters);
      }
      if (e.popularPrinters) {
        setPopularPrinters(e.popularPrinters);
      }

      setTimeout(() => {
        setListener((e: ApiResult) => {
          setAllPrinters(e as unknown as string[]);
        });
        performGetAllPrinters(user);
      }, 500);
    });
    setTimeout(() => {
      performGetRecentPrinters(user);
    }, 500);
  }, [user]);

  return !recentPrinters.length ||
    !popularPrinters.length ||
    !allPrinters.length ? (
    <div>Loading</div>
  ) : (
    <>
      <Typography level="h3">Recent Printers</Typography>
      {recentPrinters.map((printer) => (
        <Printer details={printer as unknown as PrinterDetails} />
      ))}
      <Typography level="h3">Popular Printers</Typography>
      {popularPrinters.map((printer) => (
        <Printer details={printer as unknown as PrinterDetails} />
      ))}
      <Typography level="h3">All Printers</Typography>
      {allPrinters.map((printer) => (
        <Printer details={printer as unknown as PrinterDetails} />
      ))}
    </>
  );
};

export default PrinterList;

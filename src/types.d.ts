type PapercutApi = {
  logIn: (username: string, password: string) => void;
  cookieLogIn: (username: string, authCookie: string) => void;
  logOut: (username: string) => void;
  allPrinters: (username: string) => void;
  recentPrinters: (username: string) => void;
  listJobs: (username: string, printerName: string) => void;
  releasePrints: (
    username: string,
    printerName: string,
    jobIds: string[]
  ) => void;
  cancelPrints: (username: string, jobIds: string[]) => void;
};

type ApiResult = {
  success?: boolean;
  error?: string;
  popularPrinters?: string[];
  recentPrinters?: string[];
};

type PrinterDetails = {
  printerName: string;
  serverName: string;
}

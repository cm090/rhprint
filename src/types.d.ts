declare module '*.png';

type PapercutApi = {
  logIn: (username: string, password: string) => Promise<ApiResult>;
  cookieLogIn: (username: string, authCookie: string) => Promise<ApiResult>;
  logOut: (username: string) => Promise<ApiResult>;
  allPrinters: (username: string) => Promise<ApiResult>;
  recentPrinters: (username: string) => Promise<ApiResult>;
  listJobs: (username: string, printerName: string) => Promise<ApiResult>;
  releasePrints: (
    username: string,
    printerName: string,
    jobIds: string[]
  ) => Promise<ApiResult>;
  cancelPrints: (username: string, jobIds: string[]) => Promise<ApiResult>;
};

type ApiResult = {
  call: string;
  result: {
    success?: boolean;
    error?: string;
    realname?: string;
    authCookie?: string;
    statusMessage?: string;
    popularPrinters?: PrinterDetails[];
    recentPrinters?: PrinterDetails[];
  };
};

type PrinterDetails = {
  printerName: string;
  serverName: string;
  location: string;
};

type PrintDocument = {
  id: string;
  printerName: string;
  documentName: string;
  totalPages: number;
  copies: number;
  paperSizeFormatted: string;
  usageTimeFormatted: string;
};

type HelpImage = {
  id: string;
  imageName: string;
  imageDesc: string;
};

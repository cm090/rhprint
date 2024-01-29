type PapercutApi = {
  logIn: (username: string, password: string) => void;
  logOut: (username: string) => void;
  releasePrint: (username: string, printerName: string, jobIds: string[]) => void;
}
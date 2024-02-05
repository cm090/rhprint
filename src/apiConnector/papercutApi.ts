import { NavigateFunction } from "react-router-dom";

let api: PapercutApi;
let nav: NavigateFunction;

/**
 * Attempt to log in with a session cookie.
 * @param navigator the navigation function
 */
const apiHeartbeat = (navigator: NavigateFunction) => {
  const prepareApi = () => {
    api = (window as unknown as { api: PapercutApi }).api;
    nav = navigator;
    tryCookieLogin();
  };

  const apiInterval = () => {
    try {
      prepareApi();
    } catch (e) {
      setTimeout(apiInterval, 100);
    }
  };

  apiInterval();
};

/**
 * Attempt to log in with a session cookie.
 */
const tryCookieLogin = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    api.cookieLogIn(user, token).then((data: ApiResult) => {
      if (
        data.result.success &&
        data.result.realname &&
        data.result.authCookie
      ) {
        localStorage.setItem("user", data.result.realname);
        localStorage.setItem("token", data.result.authCookie.split(":")[1]);
        if (window.location.pathname === "/login") {
          nav("/");
        }
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        if (window.location.pathname !== "/login") {
          nav("/login");
        }
      }
    });
  } else if (window.location.pathname !== "/login") {
    nav("/login");
  }
};

/**
 * Perform a log in attempt with the Papercut API.
 * @param user the user's username or email address
 * @param password the user's password
 */
const performLogIn = (user: string, password: string) =>
  api.logIn(user, password);

/**
 * Perform a log out attempt with the Papercut API.
 * @param user the user's username or email address
 */
const performLogOut = (user: string) =>
  api.logOut(user).then(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    nav("/login");
  });

/**
 * Perform API request to get a list of all printers.
 * @param user the user's username or email address
 */
const performGetAllPrinters = (user: string) => api.allPrinters(user);

/**
 * Perform API request to get a list of recent printers.
 * @param user the user's username or email address
 */
const performGetRecentPrinters = (user: string) => api.recentPrinters(user);

/**
 * Perform API request to list a user's print jobs.
 * @param user the user's username or email address
 * @param printerName the name of the printer
 */
const performListJobs = (user: string, printerName: string) =>
  api.listJobs(user, printerName);

/**
 * Perform API request to release print jobs.
 * @param user the user's username or email address
 * @param printerName the name of the printer
 * @param jobIds list of job ids to release
 */
const performReleasePrints = (
  user: string,
  printerName: string,
  jobIds: string[]
) => api.releasePrints(user, printerName, jobIds);

/**
 * Perform API request to cancel print jobs.
 * @param user the user's username or email address
 * @param jobIds list of job ids to cancel
 */
const performCancelPrints = (user: string, jobIds: string[]) =>
  api.cancelPrints(user, jobIds);

export {
  apiHeartbeat, performCancelPrints, performGetAllPrinters,
  performGetRecentPrinters,
  performListJobs, performLogIn,
  performLogOut, performReleasePrints
};

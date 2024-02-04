import { NavigateFunction } from "react-router-dom";

let api: PapercutApi;
let callback = (e: ApiResult) => {};
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
    document.addEventListener("apiResultListener", logInListener);
    api.cookieLogIn(user, token);
  } else if (window.location.pathname !== "/login") {
    nav("/login");
  }
};

/**
 * Listen for the results of a cookie login. Redirect to a different page if necessary.
 */
const logInListener = () => {
  const res = JSON.parse(sessionStorage.getItem("apiResult") as string);
  if (res.call !== "cookieLogIn") {
    return;
  }
  document.removeEventListener("apiResultListener", logInListener);
  try {
    if (res.success && window.location.pathname === "/login") {
      nav("/");
    } else if (!(res.success || window.location.pathname === "/login")) {
      nav("/login");
    }

    localStorage.setItem("user", res.realname);
    localStorage.setItem("token", res.authCookie.split(":")[1]);
  } catch (e) {}
};

/**
 * Set the API callback function.
 * @param apiCallback the callback function
 */
const setListener = (apiCallback: (e: ApiResult) => void) => {
  callback = apiCallback;
};

document.addEventListener("apiResultListener", () => {
  let res = JSON.parse(sessionStorage.getItem("apiResult") as string);
  if (res["error-msg"]) {
    const error = res["error-msg"];
    delete res["error-msg"];
    res = { ...res, error };
  }
  callback(res);
});

/**
 * Perform a log in attempt with the Papercut API.
 * @param user the user's username or email address
 * @param password the user's password
 */
const performLogIn = (user: string, password: string) => {
  api.logIn(user, password);
};

/**
 * Perform a log out attempt with the Papercut API.
 * @param user the user's username or email address
 */
const performLogOut = (user: string) => {
  const logOutListener = () => {
    document.removeEventListener("apiResultListener", logOutListener);
    nav("/login");
  };

  localStorage.removeItem("user");
  localStorage.removeItem("token");
  document.addEventListener("apiResultListener", logOutListener);
  api.logOut(user);
};

/**
 * Perform API request to get a list of all printers.
 * @param user the user's username or email address
 */
const performGetAllPrinters = (user: string) => {
  api.allPrinters(user);
};

/**
 * Perform API request to get a list of recent printers.
 * @param user the user's username or email address
 */
const performGetRecentPrinters = (user: string) => {
  api.recentPrinters(user);
};

/**
 * Perform API request to list a user's print jobs.
 * @param user the user's username or email address
 * @param printerName the name of the printer
 */
const performListJobs = (user: string, printerName: string) => {
  api.listJobs(user, printerName);
};

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
) => {
  api.releasePrints(user, printerName, jobIds);
};

/**
 * Perform API request to cancel print jobs.
 * @param user the user's username or email address
 * @param jobIds list of job ids to cancel
 */
const performCancelPrints = (user: string, jobIds: string[]) => {
  api.cancelPrints(user, jobIds);
};

export {
  apiHeartbeat,
  setListener,
  performLogIn,
  performLogOut,
  performGetAllPrinters,
  performGetRecentPrinters,
  performListJobs,
  performReleasePrints,
  performCancelPrints,
};

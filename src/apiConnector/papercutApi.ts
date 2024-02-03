let api: PapercutApi;
let callback = (e: ApiResult) => {};

/**
 * Attempt to log in with a session cookie.
 */
const apiHeartbeat = () => {
    const prepareApi = () => {
      api = (window as unknown as { api: PapercutApi }).api;
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
    window.location.href = "/login";
  }
};

/**
 * Listen for the results of a cookie login. Redirect to a different page if necessary.
 */
const logInListener = () => {
  const res = JSON.parse(sessionStorage.getItem("apiResult") as string);
  document.removeEventListener("apiResultListener", logInListener);
  if (res.success && window.location.pathname === "/login") {
    window.location.href = "/";
  } else if (!(res.success || window.location.pathname === "/login")) {
    window.location.href = "/login";
  }

  localStorage.setItem("user", res.realname);
  localStorage.setItem("token", res.authCookie.split(":")[1]);
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
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  api.logOut(user);
};

export { apiHeartbeat, performLogIn, performLogOut, setListener };

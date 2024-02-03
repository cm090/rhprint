class ApiExtension {
  constructor() {
    document.addEventListener("chromeStorageRequest", this.#onDataChanged);
  }

  logIn = (username, password) =>
    this.#performApiCall("login", {
      username,
      password: $.base64.encodeUtf8(password),
      remember: "on",
    });

  cookieLogIn = (username, authCookie) =>
    this.#performApiCall("login", {
      username,
      authCookie: `${username}:${authCookie}`,
      remember: "on",
      firstLogin: true,
    });

  logOut = (username) => this.#performApiCall("logout", { username });

  releasePrints = (username, printerName, jobIds) =>
    this.#performApiCall("print", { username, printerName, jobIds });

  cancelPrints = (username, jobIds) =>
    this.#performApiCall("cancel", { username, jobIds });

  recentPrinters = (username) =>
    this.#performApiCall("recentPrinters", { username });

  allPrinters = (username) => this.#performApiCall("allPrinters", { username });

  listJobs = (username, printerName) =>
    this.#performApiCall("jobs", { username, printerName });

  /**
   * Stores API results in browser storage
   *
   * @param changes data object from Chrome storage
   */
  #onDataChanged = ({ detail: { changes } }) => {
    if (
      changes.request.newValue === null ||
      changes.request.newValue.isRequest
    ) {
      return;
    }

    if (
      changes.request.oldValue.method === "login" &&
      changes.request.newValue.success
    ) {
      localStorage.setItem(
        "token",
        changes.request.newValue.authCookie.split(":")[1]
      );
      localStorage.setItem("user", changes.request.newValue.realname);
    }
    sessionStorage.setItem(
      "apiResult",
      JSON.stringify(changes.request.newValue)
    );
    document.dispatchEvent(new CustomEvent("apiResultListener"));
  };

  /**
   * Send API request headers to Chrome storage, and service worker will open Papercut website
   *
   * @param method "GET" or "POST"
   * @param data additional data for POST requests
   */
  #performApiCall = (method, data) => {
    sessionStorage.removeItem("apiResult");
    document.dispatchEvent(
      new CustomEvent("chromeStorageSet", {
        detail: { data: { request: { method, data, isRequest: true } } },
      })
    );
  };
}

const main = () => {
  window.api = new ApiExtension();
  window.dispatchEvent(new CustomEvent("apiReady"));
};

main();

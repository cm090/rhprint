class ApiExtension {
  #PAPERCUT_URL = "https://print.rose-hulman.edu:9192/client";

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

  releasePrint = (username, printerName, jobIds) =>
    this.#performApiCall("print", { username, printerName, jobIds });

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
   * Send API request headers to Chrome storage and open Papercut website
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

    window.open(this.#PAPERCUT_URL, "_blank");
  };
}

window.apiExtensionInstalled = true;
window.api = new ApiExtension();

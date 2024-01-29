let api: PapercutApi;
let callback = (e: ApiResult) => {};

const checkForExtension = () => {
  setTimeout(() => {
    if (
      !(window as unknown as { apiExtensionInstalled: boolean })
        .apiExtensionInstalled &&
      !localStorage.getItem("hasExtension")
    ) {
      window.location.href = "/extension-missing";
    } else {
      localStorage.setItem("hasExtension", "true");
      api = (window as unknown as { api: PapercutApi }).api;
    }
  }, 300);
};

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

const performLogIn = (email: string, password: string) => {
  api.logIn(email, password);
};

export { checkForExtension, performLogIn, setListener };

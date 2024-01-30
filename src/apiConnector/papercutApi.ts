let api: PapercutApi;
let callback = (e: ApiResult) => {};

const checkForExtension = () => {
  setTimeout(() => {
    if (
      !(window as unknown as { apiExtensionInstalled: boolean })
        .apiExtensionInstalled &&
      !sessionStorage.getItem("hasExtension")
    ) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "RHITweaks extension not found. You will not be able to make API calls."
        );
        return;
      }
      if ([window.location.pathname !== "/extension-missing"]) {
        window.location.href = "/extension-missing";
      }
    }

    try {
      api = (window as unknown as { api: PapercutApi }).api;
      sessionStorage.setItem("hasExtension", "true");
    } catch (e) {}
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

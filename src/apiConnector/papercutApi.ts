let api: PapercutApi;

const checkForExtension = () => {
  setTimeout(() => {
    if (
      !(window as unknown as { apiExtensionInstalled: boolean })
        .apiExtensionInstalled && !localStorage.getItem("hasExtension")
    ) {
      window.location.href = "/extension-missing";
    } else {
      localStorage.setItem("hasExtension", "true");
      api = (window as unknown as { api: PapercutApi }).api;
    }
  }, 300);
};

const setListener = () => {
  document.addEventListener("apiResultListener", () => {
    console.log(JSON.parse(sessionStorage.getItem("apiResult") as string));
  });
};

const performLogIn = (email: string, password: string) => {
  api.logIn(email, password);
};

export { checkForExtension, performLogIn, setListener };

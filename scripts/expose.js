const injectScript = (path) => {
  const node = document.getElementsByTagName("body")[0];
  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", chrome.runtime.getURL(path));
  node.appendChild(script);
};

const main = () => {
  // Create event listeners for getting and setting Chrome storage
  document.addEventListener("chromeStorageSet", ({ detail }) => {
    chrome.storage.local.set(detail.data);
  });
  document.addEventListener("chromeStorageGet", ({ detail }) => {
    chrome.storage.local.get(detail.data, (res) =>
      document.dispatchEvent(
        new CustomEvent("chromeStorageCallback", { detail: { res } })
      )
    );
  });
  chrome.storage.local.onChanged.addListener((changes) => {
    document.dispatchEvent(
      new CustomEvent("chromeStorageRequest", { detail: { changes } })
    );
  });

  // Inject scripts to appropriate pages
  if (window.location.hostname.includes("rose-hulman.edu")) {
    injectScript("scripts/papercut.js");
  } else {
    injectScript("scripts/jquery.min.js");
    injectScript("scripts/base64.js");
    injectScript("scripts/rhprint.js");
  }
};

main();

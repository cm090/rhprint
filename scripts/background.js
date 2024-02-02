const PAPERCUT_URL = "https://print.rose-hulman.edu:9192/client";

// Open Papercut on new request (in the background)
chrome.storage.local.onChanged.addListener((changes) => {
  try {
    if (changes.request.newValue.isRequest) {
      chrome.tabs.create({
        url: PAPERCUT_URL,
        active: false,
        selected: false,
      });
    }
  } catch (e) {}
});

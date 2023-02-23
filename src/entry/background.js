chrome.runtime.onStartup.addListener(async function () {
  var data = await chrome.storage.local.get(["times"]);
  if (data.times == undefined) {
    chrome.tabs.create({ url: "http://example.com" });
    await chrome.storage.local.set({ times: 0 });
  } else {
    if (data.times < 4) {
      chrome.tabs.create({ url: "http://example.com" });
      await chrome.storage.local.set({ times: data.times + 1 });
    }
  }
});

chrome.action.onClicked.addListener(function (tab) {
  console.log("ok");
  var url = chrome.runtime.getURL("app.html");
  console.log(url);
  chrome.tabs.create({ url: url, active: true });
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: "https://www.example.com/" });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.setUninstallURL("https://example.com/extension-survey");
  }
});

async function start() {
  var canBlock = await chrome.storage.local.get(["can"]);
  if (canBlock.can == undefined) {
    await chrome.storage.local.set({ can: true });
  }
}

start();

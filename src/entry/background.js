
chrome.action.onClicked.addListener(function (tab) {
  var url = chrome.runtime.getURL("app.html");
  chrome.tabs.create({ url: url, active: true });
});
async function start() {
  var canBlock = await chrome.storage.local.get(["can"]);
  if (canBlock.can == undefined) {
    await chrome.storage.local.set({ can: true });
  }
}
start();

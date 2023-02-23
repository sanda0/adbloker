export async function canBlockAds() {
  try {
    var can = await chrome.storage.local.get(["can"]);
    if (can.can != undefined) {
      if (can.can) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } catch (error) {
    return true;
  }
}

export const rules = [
  "ruleset_1",
  "ruleset_13",
  "ruleset_14",
  "ruleset_16",
  "ruleset_2",
  "ruleset_224",
  "ruleset_3",
  "ruleset_4",
  "ruleset_6",
  "ruleset_7",
];

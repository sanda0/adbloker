import { canBlockAds } from "./utils";
setInterval(async () => {
  var can = await canBlockAds();
  // console.log(can);
  if (can) {
    const adCells = document.querySelectorAll("#dismissible");
    adCells.forEach((el) => {
      var adB = el.querySelector("#badge");
      if (adB != undefined) {
        el.innerHTML = "";
      }
    });
  }
}, 200);

setInterval(async () => {
  var can = await canBlockAds();
  // console.log(can);
  if (can) {
    const skipBtn = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (skipBtn != undefined) {
      skipBtn.click();
    }

    var adCells = document.querySelectorAll("#companion");
    adCells.forEach((el) => {
      el.innerHTML = "";
    });
  }
}, 300);

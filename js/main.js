
import { initAvatarSwap } from "./avatar.js";

document.addEventListener("DOMContentLoaded", () => {
  // Avatar hover (only runs on pages where the element exists)
  initAvatarSwap({
    imgSelector: "#profile-pic",
    original: "images/icons/avataaarsblue.png",
    hover: "images/icons/avataaarspink.png",
  });


});
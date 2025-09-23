
// Swap avatar from blue to pink on hover
export function initAvatarSwap({

  imgSelector = "#profile-pic",
  original = "../images/icons/avataaarsblue.png",
  hover = "../images/icons/avataaarspink.png",
} = {}) {
  const img = document.querySelector(imgSelector);
  if (!img) return;

  img.addEventListener("mouseenter", () => (img.src = hover));

  img.addEventListener("mouseleave", () => (img.src = original));
}



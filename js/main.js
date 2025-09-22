


// wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("profile-pic");

  // store the two image paths
  const original = "images\avataaars (2).png"
  const hover = "images\avataaars (1).png";

  // swap on hover
  avatar.addEventListener("mouseenter", () => {
    avatar.src = hover;
  });

  avatar.addEventListener("mouseleave", () => {
    avatar.src = original;
  });
});

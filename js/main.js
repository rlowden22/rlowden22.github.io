
document.addEventListener("DOMContentLoaded", () => {
  //avatar animation
    const avatar = document.getElementById("profile-pic");

  // hobby switch: Arrays of images for each hobby
  const filmImages = ["../images/film/video-camera.png", "../images/film/horror.png", "../images/film/clapperboard.png"];
  const geologyImages = ["../images/geology/geology.png", "../images/geology/earth.png", "../images/geology/geological.png"];
  const f1Images = ["../images/f1/driver.png", "../images/f1/formula-1.png", "../images/f1/wet.png"];


  // store the two image paths
  const original = "images/icons/avataaars (2).png"
  const hover =  "images/icons/avataaars (1).png";

  // swap on hover
  avatar.addEventListener("mouseenter", () => {
    avatar.src = hover;
  });

  avatar.addEventListener("mouseleave", () => {
    avatar.src = original;
  });

// Helper function: pick a random item
  function randomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
  }

// Assign random images
  document.getElementById("hobby-film").src = randomImage(filmImages);
  document.getElementById("hobby-geology").src = randomImage(geologyImages);
  document.getElementById("hobby-f1").src = randomImage(f1Images);
});

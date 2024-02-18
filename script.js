function changeImage(imagePath) {
  document.getElementById("mainImage").src = imagePath;
  document.getElementById("mainImage").transform = " 2s ease-out";
}

// ---for sticky and static position of navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var header = document.getElementById("video-heading");
  var headerPosition = header.getBoundingClientRect().top;
  var navbarHeight = navbar.offsetHeight;
  if (headerPosition < navbarHeight) {
    navbar.classList.add("scroll-to");
  } else {
    navbar.classList.remove("scroll-to");
  }
});

// function addiframe() {
//   const iframevideo = document.getElementById("youtubeVideo");

//   iframevideo.style.display = "block";
// }

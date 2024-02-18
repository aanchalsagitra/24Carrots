const blogSection1 = document.querySelector(".flex60");
const blogSection2 = document.querySelector(".flex40");

const readMoreSection1 = document.getElementsByName(".blog-buzz-content1 a");
const readMoreSection2 = document.querySelector(".blog-buzz-content2 a");
const imgSection1 = document.querySelector(".blog-buzz-content1 img");
const imgSection2 = document.querySelector(".blog-buzz-content2 img");

const handleClick = function () {
  readMoreSection1.style.display = "block";
};
blogSection1.addEventListener(click, handleClick);

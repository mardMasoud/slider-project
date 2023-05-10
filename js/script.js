const images = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imgElm = document.querySelector("img");
const prevElm = document.querySelector(".prev");
const nextElm = document.querySelector(".next");
let count = 0;
function prevImage() {
  count--;
  if (count < 0) count = images.length-1;
  imgElm.setAttribute('src',images[count])
}

function nextImage() {
  count++;
  if (count > images.length - 1) count = 0;
  imgElm.setAttribute('src',images[count])
}

prevElm.addEventListener("click", prevImage);
nextElm.addEventListener("click", nextImage);

setInterval(nextImage,3000);
const images = ["1.jpg", "2.png", "3.jpg"];
let imgElm = document.querySelector("img");
const prevElm = document.querySelector(".prev");
let count = 0;
// setInterval(() => {imgElm.classList.remove("animate__fadeInRight")
//   count++;
//   if (count < 3) {
//     imgElm.setAttribute("src", "image/" + images[count]);
  
// }

//   if (count > 2) {
//     count = 0;
//     imgElm.setAttribute("src", "image/" + images[count]);
//   }

//   console.log("---" + count);
// }, 3000);
prevElm.addEventListener("click", function () {
  console.log(count);
  if (count == 0) {
    imgElm.setAttribute("src", "image/" + images[2]);
    count = 2;
    imgElm.classList.add("tr")
    
  } else {
    count--;
    imgElm.setAttribute("src", "image/" + images[count]);
    imgElm.classList.add("tr")
    
  }
});

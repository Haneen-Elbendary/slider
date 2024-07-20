// select all needed elements
let imgs = Array.from(document.querySelectorAll(".item img"));
let lightContainer = document.querySelector("#lightBoxContainer");
let boxItem = document.querySelector("#boxItem");
let next = document.getElementById("nextBtn");
let pre = document.getElementById("prevBtn");
let close = document.getElementById("closeBtn");
// counter for select img from the array of imgs -> imgs
let currentIndex = 0;
let imgSrc;
imgs.forEach((el) => {
  el.addEventListener("click", (event) => {
    currentIndex = imgs.indexOf(event.target);
    imgSrc = event.target.src;
    boxItem.style.backgroundImage = `url(${imgSrc})`;
    lightContainer.style.display = "flex";
  });
});

const nextImg = () => {
  currentIndex++;
  if (currentIndex === imgs.length) currentIndex = 0;
  imgSrc = imgs[currentIndex].src;
  boxItem.style.backgroundImage = `url(${imgSrc})`;
};
next.addEventListener("click", nextImg);
const prevImg = () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = imgs.length - 1;
  imgSrc = imgs[currentIndex].src;
  boxItem.style.backgroundImage = `url(${imgSrc})`;
};
pre.addEventListener("click", prevImg);
// if we use arrow function we have to use it after declaration not as regular functions
const closeImg = () => {
  lightContainer.style.display = "none";
};
close.addEventListener("click", closeImg);

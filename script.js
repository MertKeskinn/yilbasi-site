const slides = document.querySelectorAll(".slider img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);
const images = [
  "hero/1.",
  "hero/2.jpg",
  "hero/3.jpg"
  "hero/4.jpg",
  "hero/5.jpg",
  "hero/6.jpg"
  "hero/7.jpg",
  "hero/8.jpg",
  "hero/9.jpg"
  "hero/10.jpg",
  "hero/11.jpg",
  "hero/12.jpg"
  "hero/13.jpg",
  "hero/14.jpg"
];




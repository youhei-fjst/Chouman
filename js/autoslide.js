`use strict`;

const images = [
  "js/001.jpg",
  "js/002.jpg",
  "js/003.jpg",
  "js/004.jpg",
  "js/005.jpg"
];

let index = 0;

const slider = document.querySelector(`#slider`);

setInterval(() => {

  index++;

  if(index >= images.length) {
    index = 0;
  }

  slider.src = images[index];

}, 5000);
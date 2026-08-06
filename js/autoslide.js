'use stcict'

const slidesContainer = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 3000; // 自動再生の間隔（3秒）
let slideInterval;

// スライドを移動させる関数
function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 次のスライドへ
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

// 前のスライドへ
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// 自動再生を開始する関数
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// 自動再生をリセット（手動操作された時にタイマーを初期化するため）
function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// イベントリスナーの登録
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// 初期起動
startAutoSlide();
'use stcict'

const track = document.getElementById('track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// 初期状態の設定（クローンがあるためインデックス1からスタート）
let currentIndex = 1; 
let isTransitioning = false;
const slideWidth = 100; // %単位で移動

// 初期位置に配置
track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

// スライドを移動させる関数
function moveSlide(index, hasAnimation = true) {
  if (isTransitioning && hasAnimation) return;
  if (hasAnimation) isTransitioning = true;

  track.style.transition = hasAnimation ? 'transform 0.5s ease-in-out' : 'none';
  track.style.transform = `translateX(-${index * slideWidth}%)`;
  currentIndex = index;
}

// 無限ループのための境界チェック
track.addEventListener('transitionend', () => {
  isTransitioning = false;

  // 最後のクローンに達したら、本物の最初のスライドに瞬間移動
  if (slides[currentIndex].classList.contains('clone') && currentIndex === slides.length - 1) {
    moveSlide(1, false);
  }
  // 最初のクローンに達したら、本物の最後のスライドに瞬間移動
  if (slides[currentIndex].classList.contains('clone') && currentIndex === 0) {
    moveSlide(slides.length - 2, false);
  }
});

// 手動操作：次へ
nextBtn.addEventListener('click', () => {
  resetTimer();
  moveSlide(currentIndex + 1);
});

// 手動操作：前へ
prevBtn.addEventListener('click', () => {
  resetTimer();
  moveSlide(currentIndex - 1);
});

// 自動ループタイマー
let autoPlayTimer = setInterval(() => {
  moveSlide(currentIndex + 1);
}, 6000); // 3秒ごとに自動切り替え

// 手動で動かした時に自動ループタイマーをリセットする関数
function resetTimer() {
  clearInterval(autoPlayTimer);
  autoPlayTimer = setInterval(() => {
    moveSlide(currentIndex + 1);
  }, 6000);
}
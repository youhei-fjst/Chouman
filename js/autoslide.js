`use strict`;

// const images = [
//   "js/001.jpg",
//   "js/002.jpg",
//   "js/003.jpg",
//   "js/004.jpg",
//   "js/005.jpg"
// ];

// let index = 0;

// const slider = document.querySelector(`#slider`);

// setInterval(() => {

//   index++;

//   if(index >= images.length) {
//     index = 0;
//   }

//   slider.src = images[index];

// }, 5000);

    const slides = document.querySelectorAll('.slide_box img');
    let currentIndex = 0;
    const intervalTime = 5000; // 画像が切り替わる間隔（4000ミリ秒 = 4秒）

    function nextSlide() {
      // 現在の画像から「active」クラスを削除
      slides[currentIndex].classList.remove('active');
      
      // 次の画像のインデックスを計算（最後の画像の場合は0に戻る）
      currentIndex = (currentIndex + 1) % slides.length;
      
      // 次の画像に「active」クラスを追加
      slides[currentIndex].classList.add('active');
    }

    // 指定した時間ごとにnextSlide関数を繰り返し実行
    setInterval(nextSlide, intervalTime);
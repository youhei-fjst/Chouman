'use stcict'

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#jsburger');
  const nav = document.querySelector('#js-nav');

  // ボタンがクリックされた時の処理
  hamburger.addEventListener('click', () => {
    // ボタンとメニューに「is-active」クラスを付け外しする
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });

  // （オプション）メニュー内のリンクがクリックされたらメニューを閉じる
  const navLinks = document.querySelectorAll('.spnavi a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      nav.classList.remove('is-active');
    });
  });
});
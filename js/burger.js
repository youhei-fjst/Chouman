'use strict'

const menuBtn = document.getElementById('jsburger');
const navMenu = document.getElementById('js-nav');

menuBtn.addEventListener('click', () => {
  // クラスの付け外し
  menuBtn.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});

/* メニューのリンクをクリックしたらメニューを閉じる設定 */
const navLinks = document.querySelectorAll('.nav-item a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    navMenu.classList.remove('is-active');
  });
});
`use strict`;

function ChangeTab(tabname) {
  // 全部消す
  document.getElementById('tab1').style.display = 'none';
  document.getElementById('tab2').style.display = 'none';
  document.getElementById('tab3').style.display = 'none';
  document.getElementById('tab4').style.display = 'none';
  document.getElementById('tab5').style.display = 'none';
  document.getElementById('tab6').style.display = 'none';
  document.getElementById('tab7').style.display = 'none';
  document.getElementById('tab8').style.display = 'none';
  document.getElementById('tab9').style.display = 'none';
  document.getElementById('tab10').style.display = 'none';
  document.getElementById('tab11').style.display = 'none';
  document.getElementById('tab12').style.display = 'none';
  document.getElementById('tab13').style.display = 'none';
  document.getElementById('tab14').style.display = 'none';
  document.getElementById('tab15').style.display = 'none';
  // 指定箇所のみ表示
  document.getElementById(tabname).style.display = 'block';
}
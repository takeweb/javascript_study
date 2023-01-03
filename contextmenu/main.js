window.onload = function() {
  var conmenu = document.querySelector("#conmenu");  //独自コンテキストメニュー
  var area = document.querySelector("#area");     //対象エリア
  var body = document.body;                       //bodyエリア

  //右クリック時に独自コンテキストメニューを表示する
  area.addEventListener('contextmenu', function(e) {
    conmenu.style.left = e.pageX + 'px';
    conmenu.style.top = e.pageY + 'px';
    conmenu.classList.add('on');
  });

  //左クリック時に独自コンテキストメニューを非表示にする
  body.addEventListener('click',function(){
    if (conmenu.classList.contains('on')) {
      conmenu.classList.remove('on');
    }
  });
}
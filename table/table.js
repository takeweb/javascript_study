// THも対象にしたい場合
// function getCELL() {
//   const myTbl = document.getElementById('TBL');

//   // trをループ。rowsコレクションで,行位置取得。
//   for (let i = 0; i < myTbl.rows.length; i++) {
//     // tr内のtdをループ。cellsコレクションで行内セル位置取得。
//     for (let j = 0; j < myTbl.rows[i].cells.length; j++) {
//       let Cells = myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"

//       // onclickで 'Mclk'を実行。thisはクリックしたセル"td"のオブジェクトを返す。
//       Cells.onclick = function(){Mclk(this);}
//     }
//   }
// }

// TDのみを対象にしたい場合
function getCELL(){
  const myTbl = document.getElementById('TBL');
  let td = myTbl.getElementsByTagName('td'); // タグ 'td'を取得
  for(let i = 0 ;i < td.length; i++){ //tdの数だけループ
    td[i].onclick = function(){ Mclk(this); }
  }
}

function Mclk(Cell) {
  const rowINX = '行位置：' + Cell.parentNode.rowIndex;//Cellの親ノード'tr'の行位置
  const cellINX = 'セル位置：' + Cell.cellIndex;
  const cellVal = 'セルの内容：' + Cell.innerHTML;

  //取得した値の書き出し
  res=rowINX + '<br/> ' + cellINX + '<br/>' + cellVal;
  document.getElementById('Mbox0').innerHTML=res;
  var Ms1=document.getElementById('Mbox1')
  Ms1.innerText=Cell.innerHTML;
  Ms1.textContent=Cell.innerHTML;
}

// try ～ catch 例外処理、エラー処理
// イベントリスナーaddEventListener,attachEventメソッド
try{
  window.addEventListener("load", getCELL, false);
} catch (e) {
  window.attachEvent("onload", getCELL);
}

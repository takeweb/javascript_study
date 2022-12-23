// THも対象にしたい場合
// function getCellInfo() {
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
function getCellInfo(){
  const myTbl = document.getElementById('TBL');
  let td = myTbl.getElementsByTagName('td'); // タグ 'td'を取得
  for(let i = 0 ;i < td.length; i++){ //tdの数だけループ
    td[i].onclick = function(){ Mclk(this); }
  }
}

function Mclk(Cell) {
  const rowINX = '行位置：' + Cell.parentNode.rowIndex;//Cellの親ノード'tr'の行位置
  const cellINX = '列位置：' + Cell.cellIndex;
  // const cellVal = 'セルの内容：' + Cell.innerHTML;
  const cellVal = Cell.innerHTML;

  document.getElementById("year-month")
  //取得した値の書き出し
  const res = rowINX + '<br>' + cellINX + '<br>' + cellVal.substring(0, 10);
  document.getElementById('Mbox0').innerHTML = res;
  let Mb1 = document.getElementById('Mbox1');
  Mb1.innerText = Cell.innerHTML;
  Mb1.textContent = Cell.innerHTML;
}

// try ～ catch 例外処理、エラー処理
// イベントリスナーaddEventListener,attachEventメソッド
try {
  window.addEventListener("load", getCellInfo, false);
} catch (e) {
  window.attachEvent("onload", getCellInfo);
}


// define variables
const nativePicker = document.querySelector('.nativeDatePicker');
const fallbackPicker = document.querySelector('.fallbackDatePicker');
const fallbackLabel = document.querySelector('.fallbackLabel');

const yearSelect = document.querySelector('#year');
const monthSelect = document.querySelector('#month');

// Hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// Test whether a new date input falls back to a text input or not
const test = document.createElement('input');

try {
  test.type = 'month';
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === 'text') {
  // Hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // Populate the years dynamically
  // (the months are always the same, therefore hardcoded)
  populateYears();
}

function populateYears() {
  // Get the current year as a number
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  console.log(date);

  // Make this year, and the 100 years after it available in the year <select>
  for (let i = -5; i <= 5; i++) {
    const option = document.createElement('option');
    const addYear = year + i;
    if (addYear == year) {
      option.selected = true;
    }
    option.textContent = addYear;
    yearSelect.appendChild(option);
  }

  for (let i = 0; i < 12; i++) {
    const option = document.createElement('option');
    option.textContent = i + 1;
    if (i == month) {
      option.selected = true
    }
    monthSelect.appendChild(option)
  }
}

// 行追加
function addRow() {
  // table要素を取得
  let tableElem = document.querySelector('#tbl1');

  // 行数を取得
  let maxLength = tableElem.rows.length;

  // tbody要素にtr要素（行）を最後に追加
  let trElem = tableElem.tBodies[0].insertRow(-1);
  let cellElem1 = trElem.insertCell(0);
  let cellElem2 = trElem.insertCell(1);
  let cellElem3 = trElem.insertCell(2);
  let cellElem4 = trElem.insertCell(3);
  let cellElem5 = trElem.insertCell(4);
  let cellElem6 = trElem.insertCell(5);

  // td要素に追加
  cellElem1.appendChild(document.createTextNode(maxLength));
  cellElem2.appendChild(document.createTextNode('セル'));
  cellElem3.appendChild(document.createTextNode('セル'));
  cellElem4.appendChild(document.createTextNode('セル'));

  let textElem = document.createElement("input");
  textElem.classList.add("general");
  textElem.setAttribute("type", "text");
  textElem.setAttribute("value", 20);
  textElem.setAttribute("onchange", "calcTotal()");
  cellElem5.appendChild(textElem);

  let removeButton = document.createElement("button");
  removeButton.id = "remove";
  removeButton.textContent = "削除";
  removeButton.setAttribute('onclick', 'removeRow(this)');
  cellElem6.appendChild(removeButton);

  // 合計欄を再計算
  // let totalElem = document.querySelector("#total");
  // let total = Number(totalElem.textContent);
  // total += Number(cellElem5.children[0].attributes.value.value);
  // totalElem.textContent = total;
  calcTotal();
}

// 行削除
function removeRow(button) {
  // button→td→trを辿って、行インデックスを取得
  const rowIndex = button.parentNode.parentNode.rowIndex - 1;

  // table要素を取得
  let tableElem = document.querySelector('#tbl1');

  // tr要素全部を取得
  var rowElems = tableElem.rows;

  // 合計欄を再計算
  // let totalElem = document.querySelector("#total");
  // let total = Number(totalElem.textContent);
  // total -= Number(rowElems[rowIndex].children[4].children[0].attributes.value.value);
  // totalElem.textContent = total;

  // tboty要素から当該行を削除
  let trElem = tableElem.tBodies[0].deleteRow(rowIndex);

  // 合計欄を再計算
  calcTotal();
}

// 合計際計算
function calcTotal() {
  let totalElem = document.querySelector("#total");
  let total = 0;

  let list = document.querySelectorAll(".general");
  for (let i = 0; i < list.length; i++) {
    total += Number(list.item(i).value);
  }
  totalElem.textContent = total;
}
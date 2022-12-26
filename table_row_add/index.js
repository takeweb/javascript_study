// 行追加
function addRow() {
  // table要素を取得
  var tableElem = document.querySelector('#tbl1');

  // tbody要素にtr要素（行）を最後に追加
  var trElem = tableElem.tBodies[0].insertRow(-1);

  // td要素を追加
  // for (let i = 0; i > 4; i++) {
  //   var cellElem = trElem.insertCell(i);
  //   cellElem.appendChild(document.createTextNode('セル'));
  // }
  var cellElem1 = trElem.insertCell(0);
  var cellElem2 = trElem.insertCell(1);
  var cellElem3 = trElem.insertCell(2);
  var cellElem4 = trElem.insertCell(3);

  // td要素に追加
  cellElem1.appendChild(document.createTextNode('セル'));
  cellElem2.appendChild(document.createTextNode('セル'));
  cellElem3.appendChild(document.createTextNode('セル'));
  let removeButton = document.createElement("button");
  removeButton.id = "remove";
  removeButton.textContent = "削除";
  removeButton.setAttribute('onclick', 'removeRow(this)');
  cellElem4.appendChild(removeButton);
}

// 行削除
function removeRow(row) {
    const index = row.parentNode.rowIndex
    // table要素を取得
    var tableElem = document.querySelector('#tbl1');

    // tbody要素にtr要素（行）を最後に追加
    var trElem = tableElem.tBodies[0].deleteRow(index);

}
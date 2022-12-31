async function main() {
  try {
      const zipCode = getZipCode();
      const zipCodeInfo = await fetchZipCodeInfo(zipCode);
      // const view = createView(zipCodeInfo);
      // displayView(view);
      displayViews(zipCodeInfo.results);
  } catch (error) {
      console.error(`エラーが発生しました。(${error})`);
  }
}

function getZipCode() {
  const value = document.querySelector('#zipcode').value;
  return encodeURIComponent(value);
}

async function fetchZipCodeInfo(zipCode) {
  const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${encodeURIComponent(zipCode)}`);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(new Error(`${response.status}:${response.statusText}`));
  }
}

function displayViews(list) {
  let views = "";
  for (let i = 0; i < list.length; i++) {
    // views += createView(list[i]);
    displayView(list[i]);
  }
}

// function createView(zipCodeInfo) {
//   return escapeHTML`
//     <tr>
//       <td>${zipCodeInfo.zipcode}</td>
//       <td>${zipCodeInfo.prefcode}</td>
//       <td>${zipCodeInfo.address1}</td>
//       <td>${zipCodeInfo.address2}</td>
//       <td>${zipCodeInfo.address3}</td>
//       <td>${zipCodeInfo.kana1}</td>
//       <td>${zipCodeInfo.kana2}</td>
//       <td>${zipCodeInfo.kana3}</td>
//     </tr>
//   `;
// }

function displayView(zipCodeInfo) {
  // table要素を取得
  let tableElem = document.querySelector('#result');

  // tbody要素にtr要素（行）を最後に追加
  let trElem = tableElem.tBodies[0].insertRow(-1);

  // tr要素にtd要素を追加
  let cellElem1 = trElem.insertCell(0);
  let cellElem2 = trElem.insertCell(1);
  let cellElem3 = trElem.insertCell(2);
  let cellElem4 = trElem.insertCell(3);
  let cellElem5 = trElem.insertCell(4);
  let cellElem6 = trElem.insertCell(5);
  let cellElem7 = trElem.insertCell(6);
  let cellElem8 = trElem.insertCell(7);

  // td要素に情報をセット
  cellElem1.appendChild(document.createTextNode(zipCodeInfo.zipcode));
  cellElem2.appendChild(document.createTextNode(zipCodeInfo.prefcode));
  cellElem3.appendChild(document.createTextNode(zipCodeInfo.address1));
  cellElem4.appendChild(document.createTextNode(zipCodeInfo.address2));
  cellElem5.appendChild(document.createTextNode(zipCodeInfo.address3));
  cellElem6.appendChild(document.createTextNode(zipCodeInfo.kana1));
  cellElem7.appendChild(document.createTextNode(zipCodeInfo.kana2));
  cellElem8.appendChild(document.createTextNode(zipCodeInfo.kana3));
}

function escapeSpecialChars(str) {
  return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
      const value = values[i - 1];
      if (typeof value === "string") {
          return result + escapeSpecialChars(value) + str;
      } else {
          return result + String(value) + str;
      }
  });
}
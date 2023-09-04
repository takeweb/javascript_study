const datetime = new Date();
document.querySelector('#result1').textContent = datetime.toLocaleString();

// ３ヶ月後
datetime.setMonth(datetime.getMonth() + 3);
document.querySelector('#result2').textContent = document.querySelector('#result2').textContent + datetime.toLocaleString();

// 20日前
datetime.setDate(datetime.getDate() - 20);
document.querySelector('#result3').textContent = document.querySelector('#result3').textContent + datetime.toLocaleString();

// その月の最終日
datetime.setMonth(datetime.getMonth() + 1);
datetime.setDate(0);
document.querySelector('#result4').textContent = document.querySelector('#result4').textContent + datetime.toLocaleString();

// 日付・自国の差
let dt1 = new Date(2022, 10, 15);
let dt2 = new Date(2022, 11, 20);
const diff = (dt2.getTime() - dt1.getTime()) / (1000 * 60 * 60 * 24);
document.querySelector('#result5').textContent = document.querySelector('#result5').textContent + diff;
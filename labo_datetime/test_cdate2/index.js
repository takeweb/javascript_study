import { cdate } from "cdate";
const cdateJST = cdate().tz("Asia/Tokyo").cdateFn();
// const cdateJST = cdate().utcOffset(9).cdateFn();

Object.prototype.getName = function () {
  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(this.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
};

const origin = cdateJST("2023-01-01 00:00:00");
console.log(origin);
console.log(typeof origin);
console.log(toString.call(origin));
console.log(origin.getName());

// => '2023/01/01 00:00:00 +09:00'
const text = cdateJST("2023-01-01 00:00:00").text("%Y/%m/%d %H:%M:%S %:z");
console.log(text);
console.log(typeof text);

// => '2023/01/01 00:00:00 +09:00'
const format = cdateJST("2023-01-01 00:00:00").format("YYYY/MM/DD HH:mm:ss Z");
console.log(format);
console.log(typeof format);

// 当日日付
let today = cdateJST();
let format2 = today.format("YYYY/MM/DD HH:mm:ss Z");
console.log(`今日: ${format2}`);

// １ヶ月後日付
const format3 = today.add(1, "month").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`１ヶ月後: ${format3}`);

// １ヶ月前日付
const format4 = today.add(-1, "month").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`１ヶ月前: ${format4}`);

// 明日
const format5 = today.add(1, "day").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`明日: ${format5}`);

// 昨日
const format6 = today.add(-1, "day").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`昨日: ${format6}`);

// 3時間後
const format7 = today.add(3, "hour").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`3時間後: ${format7}`);

// 3週間後
const format8 = today.add(3, "week").format("YYYY/MM/DD HH:mm:ss Z");
console.log(`3週間後: ${format8}`);

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
console.log(arr.getName());

const str = new String("Hello");
console.log(str.getName());

const num = new Number(100);
console.log(num.getName());

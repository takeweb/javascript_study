import { cdate } from "cdate";
// const { cdate } = require("cdate");

const today = cdate(); // 今日
const start = today.startOf("month").startOf("week"); // 今月の第１週の日曜日
const end = today.endOf("month").endOf("week"); // 今月の最終週の土曜日

const space = "      ";
// console.log(`${space}${today.get("year")}年${today.get("month")}月`);
// console.log(`${space}${today.format("YYYY")}年${today.format("MM")}月`);
console.log(`${space}${today.format("YYYY/MM")}`);
for (let day = start; +day < +end; ) {
  const week = [];
  for (let i = 0; i < 7; i++) {
    // week.push(day.get("date").toString().padStart(2, "0")); // 日付を取り出す
    week.push(day.format("DD")); // 日付を取り出す
    day = day.next("day"); // 翌日
  }
  console.log(week.join(" "));
}

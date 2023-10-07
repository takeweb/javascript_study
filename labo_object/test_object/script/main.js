const obj = {
  key: "value",
};

console.log(obj.toString() === Object.prototype.toString());
// console.log(obj.toString() === obj.prototype.toString()); // NG

console.log(obj.toString());
console.log(JSON.stringify(obj, null, 2));

/**
 * 変数と同名のプロパティ
 */
const title = "速習React";
const price = 500;

const book = { title, price };
console.log(JSON.stringify(book, null, 2));

/**
 * メソッドの簡易構文
 */
const member = {
  name: "佐藤理央",
  greet() {
    console.log(`こんにちは、${this.name}さん！`);
  },
};
member.greet();

/**
 * 算出プロパティ
 */
let i = 0;
const member2 = {
  [`attr${++i}`]: "佐藤理央",
  [`attr${++i}`]: "女性",
  [`attr${++i}`]: "18歳",
};
console.log(JSON.stringify(member2, null, 2));

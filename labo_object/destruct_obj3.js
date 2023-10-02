const member = {
  fullname: "佐藤理央",
  sex: "female",
  age: 18,
};

// 残りのプロパティ名を取得する
const { fullname: fullname, ...rest } = member;
console.log(fullname2);
console.log(rest);

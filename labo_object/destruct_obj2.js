const member = {
  fullname: "佐藤理央",
  sex: "female",
  age: 18,
};

// プロパティ名とは異なる名前の変数に代入する
const { sex: gender } = member;
console.log(gender);

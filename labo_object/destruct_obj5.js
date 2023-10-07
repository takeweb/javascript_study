const member = {
  fullname: "佐藤理央",
  sex: "female",
  age: 18,
};

// 宣言文と代入文を切り離す
let fullname, sex, memo;
({ fullname, sex, memo = "---" } = member);

console.log(fullname, sex, memo);

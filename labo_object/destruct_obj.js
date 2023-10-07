const member = {
  fullname: "佐藤理央",
  sex: "female",
  age: 18,
};

const { fullname, sex, memo = "---" } = member;
console.log(fullname, sex, memo);

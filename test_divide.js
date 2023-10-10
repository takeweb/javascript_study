/**
 * 分割代入の例
 * @param {*} param0
 */
function greet({ name, age }) {
  console.log(`こんにちは、私は${name}、年齢は${age}です。`);
}

const my = { name: "佐藤理央", sex: "female", age: 18 };
greet(my);

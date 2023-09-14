/**
 * オブジェクトの基本
 */
const person = {
  name: "taro",
  age: 39,
  print: function () {
    console.log(`${this.name}(${this.age})`);
  },
};

person.print();

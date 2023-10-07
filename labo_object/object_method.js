/**
 * オブジェクトの基本
 * メソッド省略表記
 */
const person = {
  name: "taro",
  age: 39,
  print() {
    console.log(`${this.name}(${this.age})`);
  },
};

person.print();

/**
 * オブジェクトの基本
 * アロー関数では、thisはundefinedになってしまう
 */
const person = {
  name: "taro",
  age: 39,
  print: () => {
    console.log(`${this.name}(${this.age})`);
  },
};

person.print();

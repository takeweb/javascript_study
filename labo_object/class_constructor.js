/**
 * クラスも実はオブジェクト
 * コンストラクタ
 */
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`${this.name}(${this.age})`);
  }
}
const person = new Person("taro", 39);
person.print();

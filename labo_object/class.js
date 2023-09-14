/**
 * クラスも実はオブジェクト
 */
class Person {
  name;
  age;
  print() {
    console.log(`${this.name}(${this.age})`);
  }
}
const person = new Person();
person.name = "taro";
person.age = 39;
person.print();

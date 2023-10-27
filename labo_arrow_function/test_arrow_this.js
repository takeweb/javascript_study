this.text = "aaa";

const hoge = () => {
  console.log(this.text);
};

const foo = function () {
  console.log(this.text);
};

const obj1 = {
  text: "bbb",
  func1: hoge,
  func2: foo,
};

const obj2 = {
  text: "ccc",
  func1: hoge,
  func2: foo,
};

// アロー関数だと、thisはオブジェクトの外で固定される
obj1.func1(); // aaa
obj2.func1(); // aaa

// 無形関数では、thisはオブジェクト内に限定される
obj1.func2();
obj2.func2();

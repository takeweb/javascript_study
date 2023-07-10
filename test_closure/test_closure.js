function fnA() {
  let hoge = "ほげ";
  console.log(hoge);
  
  function fnB() {
    console.log(hoge);
  }
  return fnB;
}

// fnA();
let myFunc = fnA();
myFunc();

myFunc.hoge = "aaa";
console.log(myFunc.hoge)
myFunc();
// クロージャとは、「外部スコープにある変数への参照を保持できる」という関数が元性質の事。
function makeCounter() {
  var cnt = 0;
  function counter() {
    cnt++;
    console.log(cnt);
  }
  return counter;
}

let counter_a = makeCounter();
console.log(counter_a);
console.log(typeof counter_a);
counter_a();
counter_a();
counter_a();

let counter_b = makeCounter();
counter_b();
counter_b();

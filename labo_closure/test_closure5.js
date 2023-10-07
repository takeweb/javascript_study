let scope = "global scope";

function checkScope() {
  let scope = "local scope";

  function innerFunc() {
    return scope;
  }

  return innerFunc;
}

const result1 = checkScope();
console.log(result1);

const result2 = checkScope()();
console.log(result2);

let uniqueInt = (() => {
  let counter = 0;
  return function () {
    return counter++;
  };
})();

const result1 = uniqueInt();
console.log(result1);

const result2 = uniqueInt();
console.log(result2);

const result3 = uniqueInt();
console.log(result3);

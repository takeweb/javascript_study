/**
 * Optional Chaining演算子(?.)
 */
const str = null;
console.log(str?.substring(1));

/**
 * Null合体演算子
 */
let value = null;
console.log(value ?? "規定値");

// 省略構文
value ??= "規定値";
console.log(value);

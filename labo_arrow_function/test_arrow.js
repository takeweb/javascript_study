/**
 * アロー関数
 */

// 無名関数
const f1 = function () {
  return "Hello!";
};

// アロー関数で書くと
const f2 = () => "Hello";

// 引数ありの無名関数
const f3 = function (name) {
  return "Hello, ${name}!";
};

// 引数ありのアロー関数
const f4 = (name) => `Hello, ${name}!`;

// 引数ありの無名関数
const f5 = function (a, b) {
  return a + b;
};

// 引数ありの無名関数
const f6 = (a, b) => a + b;

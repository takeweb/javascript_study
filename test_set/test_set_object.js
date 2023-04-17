import { difference, intersection, isSuperset, symmetricDifference, union } from "./util_set.js";

// 例
let obj1 = { name: "aaa", price: 100 };
let obj2 = { name: "bbb", price: 200 };
let obj3 = { name: "ccc", price: 300 };
let obj4 = { name: "ddd", price: 400 };
let obj5 = { name: "eee", price: 500 };
let obj6 = { name: "fff", price: 600 };

const setA = new Set([obj1, obj2, obj3, obj4])
const setB = new Set([obj2, obj3])
const setC = new Set([obj3, obj4, obj5, obj6])

// 和集合 returns Set {1, 2, 3, 4, 5, 6}
console.log(union(setA, setC));

// 積集合 returns Set {3, 4}
console.log(intersection(setA, setC));

// 差集合 returns Set {1, 2}
console.log(difference(setA, setC));

// 対称差集合 returns Set {1, 2, 5, 6}
console.log(symmetricDifference(setA, setC));

// 上位集合判定 returns true
console.log(isSuperset(setA, setB));

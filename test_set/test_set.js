import { difference, intersection, isSuperset, symmetricDifference, union } from "./util_set.js";

// 例
const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3])
const setC = new Set([3, 4, 5, 6])

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

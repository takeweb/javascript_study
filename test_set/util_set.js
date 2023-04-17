// JavaScriptのSetには、集合演算子が実装されていない。その為、自力で実装するしかない。
// 参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set

// 和集合
function union(setA, setB) {
  let _union = new Set(setA)
  for (let elem of setB) {
      _union.add(elem)
  }
  return _union
}

// 積集合
function intersection(setA, setB) {
  let _intersection = new Set()
  for (let elem of setB) {
      if (setA.has(elem)) {
          _intersection.add(elem)
      }
  }
  return _intersection
}

// 差集合
function difference(setA, setB) {
  let _difference = new Set(setA)
  for (let elem of setB) {
      _difference.delete(elem)
  }
  return _difference
}

// 対称差集合
function symmetricDifference(setA, setB) {
  let _difference = new Set(setA)
  for (let elem of setB) {
      if (_difference.has(elem)) {
          _difference.delete(elem)
      } else {
          _difference.add(elem)
      }
  }
  return _difference
}

// 上位集合判定
function isSuperset(set, subset) {
  for (let elem of subset) {
      if (!set.has(elem)) {
          return false
      }
  }
  return true
}

export { union, intersection, difference, symmetricDifference, isSuperset }

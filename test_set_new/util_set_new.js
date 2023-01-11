// JavaScriptのSetには、集合演算子が実装されていない。その為、自力で実装するしかない。
// 参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set

// 和集合(OR)
function union(setA, setB) {
  const _union = new Set([...setA, ...setB]);
  return _union;
}

// 積集合(AND)
function intersection(setA, setB) {
  const _intersection = new Set([...setA]
                          .filter(e => setB.has(e)));
  return _intersection;
}

// 差集合
function difference(setA, setB) {
  const _difference = new Set([...setA]
                        .filter(e => !setB.has(e)));
  return _difference;
}

// 対称差集合
function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  setB.forEach(elem => {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
        _difference.add(elem);
    }
  });
  return _difference;
}

// 上位集合判定
function isSuperset(set, subset) {
  subset.forEach(elem => {
    if (!set.has(elem)) {
      return false;
    }
  });
  return true;
}

// // 上位集合判定
// function isSuperset(set, subset) {
//   const result = subset.find(elem => !set.has(elem));
//   if (result === null) {
//     return true;
//   } else {
//     return false
//   }
// }

export { union, intersection, difference, symmetricDifference, isSuperset };


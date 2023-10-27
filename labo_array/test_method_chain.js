// メソッドチェーン----------------------------------------------------------------
const ECMAScriptVersion = [
  { name: "ECMAScript 1", year: 1997 },
  { name: "ECMAScript 2", year: 1998 },
  { name: "ECMAScript 3", year: 1999 },
  { name: "ECMAScript 5", year: 2009 },
  { name: "ECMAScript 5.1", year: 2011 },
  { name: "ECMAScript 2015", year: 2015 },
  { name: "ECMAScript 2016", year: 2016 },
  { name: "ECMAScript 2017", year: 2017 },
];

// メソッドチェーンで必要な加工処理を並べる--------------------------------------------
const versionNames = ECMAScriptVersion.filter((item) => item.year >= 2000).map(
  (item) => item.name
);

console.log(versionNames);

export default {};

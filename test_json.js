const json = '{ "id": 1, "name": "js-primer", "bio": null }';
const obj = JSON.parse(json);
console.log(obj);
console.log(obj.id);
console.log(obj.name);

// 第一引数のみで、単純に文字列化
console.log(JSON.stringify(obj));

// 第二引数で、null値を除去する例
const replacer = (key, value) => {
  if (value === null) {
    return undefined;
  }
  return value;
}
console.log(JSON.stringify(obj, replacer));

// 第三引数で、Space2でフォーマット指定
console.log(JSON.stringify(obj, replacer, 2));

// 第三引数で、Tabでフォーマット指定
console.log(JSON.stringify(obj, replacer, "\t"));

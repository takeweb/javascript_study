const member = {
  fullname: "佐藤理央",
  sex: "female",
  age: 18,
};

// 入れ子のオブジェクトを分解する
const member2 = {
  fullname: "佐藤理央",
  address: {
    prefecture: "静岡県",
    city: "藤枝市",
  },
};

const {
  address,
  address: { city },
} = member2;
console.log(address);
console.log(city);

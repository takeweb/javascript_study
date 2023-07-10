class NumberWrapper {
  #value1;

  constructor(value) {
    this.#value1 = value
  }

  dump() {
    console.log(`今の値: ${this.#value1}`)
  }

  get value1() {
    return this.#value1;
  }

  set value1(newValue) {
    this.#value1 = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);
numberWrapper.dump();

numberWrapper.value1 = 33;
numberWrapper.dump();

// プロパティ '#value1' には private 識別子が指定されているため、クラス 'NumberWrapper' の外部ではアクセスできません。
// console.log(numberWrapper.#value1);
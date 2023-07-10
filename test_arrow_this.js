this.text = 'aaa';

const hoge = () => {
    console.log(this.text);
}

const foo = function () {
    console.log(this.text);
}

const obj1 = {
    text: 'bbb',
    func1: hoge,
    func2: foo,
}

const obj2 = {
    text: 'ccc',
    func1: hoge,
    func2: foo,
}

obj1.func1();
obj2.func1();

obj1.func2();
obj2.func2();
const bruce = { name: "ブルース" };
const madeline = { name: "マデライン" };

function greet() {
    return `私は${this.name}です。`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
const f1 = function() { return "Hello!" };
const f2 = () => "Hello";

const f3 = function(name) { return 'Hello, ${name}!'; }
const f4 = name => `Hello, ${name}!`;

const f5 = function(a, b) { return a + b; }
const f6 = (a, b) => a + b;

const o = {
    name: 'Julie',
    greetBackward: function() {
        const getReverseName = () => { /* アロー関数定義開始 */
            console.log(this);
            let nameBackwards = '';
            for (let i = this.name.length -1; i >=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };　/* アロー関数定義終了 */

        return `${getReverseName()} si mean ym ,olleH`;
    },
    whoami: () => {
        console.log(this);
    }
}

console.log(o.greetBackward());
console.log(o.whoami());
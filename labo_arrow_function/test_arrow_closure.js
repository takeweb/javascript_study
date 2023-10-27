/**
 * アロー関数とクロージャ
 */
const o = {
  name: "Julie",
  greetBackward: function () {
    /* アロー関数定義開始 */
    const getReverseName = () => {
      console.log("アロー関数内のthis: ");
      console.log(this);
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      nameBackwards += " si eman ym ,olleH";
      return nameBackwards;
    };
    /* アロー関数定義終了 */

    return `${getReverseName()}`;
  },
  whoami: () => {
    console.log(`アロー関数外のthis: ${JSON.stringify(this, null, 2)}`);
  },
};

console.log(o.greetBackward());
console.log(o.whoami());

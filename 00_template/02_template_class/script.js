/**
 * @class
 * @classdesc メンバーについての情報を管理します。
 * @param {string} name 氏名
 * @param {number} age 年齢
 * @throws {Error} name、ageは必須項目です。
 * @author Takeweb
 * @version 1.0.0
 */
class Member {
    constructor(name, age) {
        if (name == undefined || age == undefined) {
        throw new Error('name、ageは必須項目です。');
        }
        this.name = name;
        this.age = age;
    }

    /**
     * メンバーに関する詳細情報を表示します。
     * @return {String} メンバーの氏名と年齢
     * @departed {@link Member#toString}メソッドの代わりに利用してください。
     */
    show() {
        return `名前は${this.name}、年齢は${this.age}歳です。`;
    }

    /**
     * Memberクラスの内容を文字列化します。
     * @return {String} メンバーの氏名と年齢
     */
    toString() {
        return `名前は${this.name}、年齢は${this.age}歳です。`;
    }
}

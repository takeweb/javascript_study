let a: string = "a";
let b = false;
// any 何でもOK型　基本的に使用しない
let c: any = true;

// 戻り値無しはvoid
function funcA(a: number, b: boolean) : number {
    return a;
}

// arry
let aa: number[] = [10, 20];

// object
interface Moge {
    a: number,
    b?: string,       // undefined
    c: string | null, // nullable
}

//
let v: Moge = {a: 20, b: "aaa", c: null};




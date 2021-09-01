export let name = "m2.js";

export function mun(x, y) {
    return x * y;
}

// 一个模块只能有一个缺省方法
export default function (args) {
    console.log("m2.js", args);
}
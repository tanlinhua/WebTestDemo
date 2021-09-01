import { name, age, sum } from "./m1.js";

console.log(name);
console.log(age);
console.log(sum(10, 20));

import { name as name2, mun } from "./m2.js";

console.log(name2);
console.log(mun(10, 20));
import printx from "./m2.js";// 导入缺省
printx("m2.js.test");
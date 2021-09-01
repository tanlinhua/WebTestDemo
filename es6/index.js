// node index.js

// TODO let vs var块级作用域不同
let i = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

let [a, b, c] = [1, 2, 3];
console.log(a);

let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x);

// TODO const 声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415; // PI = 3; // Uncaught TypeError: Assignment to constant variable.


// TODO 解构赋值
let [a1, b1, c1] = [1, 2, 3];
console.log("数组解构赋值:" + a1 + b1 + c1);
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
console.log("对象解构赋值:" + foo + bar);
const [s1, s2, s3, s4, s5] = 'hello';
console.log("字符串的解构赋值:" + s1 + s2 + s3 + s4 + s5);

console.log("...运算符");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrAll = [...arr1, 7, 8, 9, ...arr2];
console.log(arrAll);

function show(a, b, c) {
    console.log("func.show:", a, b, c);
}
function demo(...args) {
    console.log("func.demo:", args);
}
show(...arr1);
demo(1, 2, 3, 4, 5);

// TODO Set
console.log("Set");
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log("s.size=" + s.size);
console.log("s.has=" + s.has(1));
for (let i of s) {
    console.log(i); // 2 3 5 4
}

let arr = [...s];
console.log("arr=" + arr);

// TODO Map
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
console.log("map.size=" + map.size) // 2
map.set("age", 18);
console.log(map.has('name'))// true
console.log(map.get('name'))// "张三"
console.log(map.has('title')) // true
console.log(map.get('title')) // "Author"

// TODO 字符串
// String.fromCodePoint()
// String.raw()
// codePointAt()
// normalize()
// includes(), startsWith(), endsWith()
// repeat()
// padStart()，padEnd()
// trimStart()，trimEnd()
// matchAll()
// replace()

let sss = 'Hello world!';
console.log(sss.startsWith('Hello')); // true
console.log(sss.endsWith('!')); // true
console.log(sss.includes('o')); // true
console.log(sss.startsWith('Hello', 6)); // true
console.log(sss.endsWith('!', 5)); // true
console.log(sss.includes('o', 6)); // false

const ssss = '  abc  ';
ssss.trim() // "abc"
ssss.trimStart() // "abc  "
ssss.trimEnd() // "  abc"


// TODO 模板字符串
console.log("模板字符串");

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));

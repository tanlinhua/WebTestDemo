let name1 = "jay";
let age = 18;
let sex = "男";

const json = { name: name1, age, sex };
console.log(json);
let str = JSON.stringify(json);
console.log(str);
console.log(JSON.parse(str));
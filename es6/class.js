// // es6之前
// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;

//     this.say = function () {
//         console.log("我是", name, "今年", age, "性别", sex);
//     }
//     this.run = function () {
//     }
// }
// let p = new Person("jay", 18, '男');
// console.log(p);
// p.say();

// es6
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say() {
        console.log("我是", this.name, "今年", this.age, "性别", this.sex);
    }
}

const p = new Person("jay", 18, "男");
console.log(p);
p.say();

class Student extends Person {
    constructor(name, age, sex, school) {
        super(name, age, sex);
        this.school = school;
    }
    study() {
        console.log("我在", this.school, "学习");
    }
}

const s = new Student("jay", 18, "男", "哔哩哔哩");
console.log(s);
s.say();
s.study();
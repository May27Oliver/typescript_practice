"use strict";
//型別註記Type Annotation
//註記一：註記在變數前面
var message = 'Hello World';
//函式型別的註記
function mayReturnEitherStringOrNumber(b) {
    if (b) {
        return '20';
    }
    else {
        return 20;
    }
}
//註記形式(二) 此處有誤
// const age = <number>mayReturnEitherStringOrNumber(false);
// console.log(typeof age);
//型別註記(三) ：註記在未知的值，但使用as關鍵字
var ageAsString = mayReturnEitherStringOrNumber(true);
console.log(typeof ageAsString);
var myName = 'Maxwell';
var age = 20;
var hasPet = false;
//null undefined被稱為null types，會被認定為any
var nothing = undefined;
var nothingLiterally = null;
var maxwell = {
    name: 'Maxwell',
    age: 20,
    gender: 'male'
};
var someone = {
    knows: undefined,
    identity: null
};
var getName = function (props) {
    console.log('name:', props.name);
    console.log('age', props.age);
    console.log('gender', props.gender);
};
//但傳入的參數有時會遠遠大於定義好的interface，此時就會報錯。
//處理這種問題三種方法
//1.Type Assertion
getName({ name: 'Quan', age: 21, gender: 'secrete', hasPet: true });
//2.將物件放入變數之中
var AceSomeone = { name: 'Quan', age: 21, gender: 'secrete', hasPet: true };
getName(AceSomeone);
//3.在interface上加入[propName:string]:any屬性
getName({ name: 'Quan', age: 21, gender: 'secrete', hasPet: true });
//函式型別註記
var aceExfn;
aceExfn = function () {
    console.log('jojo');
};
var addition = function (num1, num2) {
    return num1 + num2;
};
//陣列型別
//字串陣列
var aceArr;
aceArr = ['Harry', 'tier', 'cat'];
//有字串有數字陣列
var aceArr1;
aceArr1 = ['Harry'];
var aceArr2;
aceArr2 = [
    {
        name: 'KT',
        age: 20
    },
    {
        name: 'NY',
        age: 100
    }
];
// function classPerson(this:
//   {
//     name:string,
//     age:number,
//     work:()=>void,
//     // [propName:string]:any
//   }
// ){
//   this.name = 'Vane';
//   this.age = 42;
//   this.work = function(){
//     console.log('work');
//   }
// }
var classPerson = /** @class */ (function () {
    function classPerson() {
        this.name = "Vane";
        this.age = 42;
        this.work = function () {
            console.log('work');
        };
    }
    return classPerson;
}());
classPerson.prototype.married = true;
classPerson.prototype.play = function () {
    console.log('play');
};
//static靜態方法無法透過new的實例來調用
var aPerson = new classPerson();
console.log(p.name);

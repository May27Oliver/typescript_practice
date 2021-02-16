"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello TypeScript');
//typescript資料類型
console.log('Number類型');
//number
var num1 = 1000;
var num2 = 10.2;
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
function add(num4, num5) {
    var num6 = num4 + num5;
    console.log(num6);
}
add(10, 20);
console.log('最大值', Number.MAX_VALUE);
console.log('最小值', Number.MIN_VALUE);
console.log('String類型');
//string
var str = 'Vanes';
console.log(str);
var str2 = "";
var str3 = "";
var str4 = "";
var empName = 'Vanes';
var empDept = "Software";
var output = empName + "在" + empDept + "工作";
var output1 = empName + "\u5728" + empDept + "\u5DE5\u4F5C";
console.log(output);
console.log(output1);
var str6 = "123";
//boolean
console.log('Boolean類型');
var isActive = true;
var isUpdated = false;
console.log(isActive);
console.log(typeof isActive);
console.log(isUpdated);
console.log(typeof isUpdated);
//void
console.log('Void類型');
//void類型是函式return的一種定義，他確定函式沒有return
//一般變數沒有void類型，因為變數中可以設置undefined或null
function show() {
    var num = 10;
    console.log(num);
    //void不許有return 確切值，但可以return undefined
}
show();
var a;
console.log(a); //undefined
console.log(typeof a); //undefined
//null
console.log('null類型');
//null表示變數值為空
var aa = null;
aa = null;
//undefined
console.log('undefined類型');
//undefined類型表示為賦值的狀態
var ud;
ud = undefined;
console.log(ud);
//any類型
console.log('any類型');
//any類型可以避免類型檢測錯誤，api串接時可以避免錯誤。
var an;
an = "Taiwanese";
an = 10;
an = true;
function addAny(a, y) {
    var z;
    z = a + y;
    console.log(z);
}
addAny('Su', ' Ch');
//array類型
console.log('array類型');
//定義方式：
//1.加上[]
var arr1 = [1, 2, 3];
var arrStr = ['1', '2', '3'];
var arrAny = [1, '2', 3];
//變數名稱後面加上number型別，代表字串之中只能有numer
//泛型類型定義方式
var arr2 = [1, 2, 3];
//tuple類型
var user;
user = [10, 'Vane', 'Su', true];
console.log(user);
var emp;
emp = [
    [10, 'Vane'],
    [5, 'Oliver'],
    [12, 'Ocean']
];
console.log(emp);
emp.push([14, 'a']);
//enum枚舉
var arrDes = [1, 'sfsdg', true];
console.log.apply(console, arrDes);
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 5] = "green";
    color[color["blue"] = 6] = "blue";
})(color || (color = {}));
console.log(color.blue);
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["right"] = "right";
    direction["left"] = "left";
})(direction || (direction = {}));
console.log(direction.left);
//function類別
console.log('function類型');
function display() {
    console.log('Hello World!');
}
display();
function addFunc(num1, num2) {
    return num1 + num2;
}
console.log(addFunc(1, 2));
function showFunc() {
    return "Hello World";
}
console.log(showFunc());
//interface類型
console.log('interface類型');
function showInterface() {
    // let kp1:keypair = {1,"value"} //wrong
    var kp2 = { key: 1, value: 'Olie' };
    var kp3 = { value: 'Dido', key: 10 };
}
var calculator = {
    sumCal: function (first, second) {
        return first + second;
    }
};
console.log(calculator.sumCal(1, 2));
//Generic泛型類型
//泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。
//https://willh.gitbook.io/typescript-tutorial/advanced/generics
//https://magiclen.org/typescript-generics/
console.log('Generic類型');
console.log('泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。');
function showGeneric(args) {
    return args;
}
//<T>代表呼叫時自行填入資料型態。
var op1 = showGeneric('Hello World');
var op2 = showGeneric(123);
console.log(op1);
console.log(op2);
//never類型，非常少用到
console.log('never類型');
//never類型是其他的意思，包含了undefined和null，意味其只能被never賦值。
var tpNever;
tpNever = undefined;
var tpNever1;
tpNever1 = null;
var tpNever2;
// tpNever2 = (()=>{
//     throw new Error('錯誤訊息')
// })();
//函式定義
function work() {
    return 'work';
}
console.log(work());
var work1 = function () {
    return 123;
};
console.log(work1());
//參數
function getUser(name, age) {
    if (name === void 0) { name = 'Vane'; }
    if (age === void 0) { age = 12; }
    return name + "\u5E74\u9F61\u662F" + age;
}
console.log(getUser('Vane', 12));
var getInfo = function (name, age) {
    return name + "\u5E74\u9F61\u662F" + age;
};
console.log(getInfo('Vane', 12));
//剩餘參數
function sum(a, b, c) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var total;
    total = a + b + c;
    args.forEach(function (item) {
        total += item;
    });
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
//函式重載
console.log('函式重載');
function getMulUser(str) {
    if (typeof str === 'string') {
        return '我叫:' + str;
    }
    else {
        return '我的年齡是：' + str;
    }
}
console.log(getMulUser('Vane'));
//class：
var Person = /** @class */ (function () {
    function Person(n) {
        //實例化時自動產生
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('Oliver');
console.log(p.getName());
p.setName('Oli');
console.log(p.getName());
//類的繼承操作
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    //extends實現的是類的繼承
    function Student(name) {
        return _super.call(this, name) || this; //初始化父類的建構函式。
    }
    Student.prototype.work = function () {
        console.log(this.name + "\u6B63\u5728work");
    };
    Student.prototype.getName = function () {
        return "\u6211\u7684\u540D\u5B57";
    };
    return Student;
}(Person));
var cs = new Student('OOl');
console.log(cs.getName());
//class 修飾符
//public 公共 在當前類、子類、全域都可訪問。
//protected 保護 在當前類、子類可以訪問、外部無法訪問。
//private 私有 在當前類可以訪問，但在子類與外部無法訪問。
//所以的屬性若不加修飾符則默認為public

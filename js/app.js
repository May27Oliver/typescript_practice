"use strict";
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
    [5, 'Oliver']
];
console.log(emp);
emp.push([14, 'a']);
//enum枚舉

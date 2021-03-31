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
//註記形式(二)
var age = mayReturnEitherStringOrNumber(false);
console.log(typeof age);
//型別註記(三) ：註記在未知的值，但使用as關鍵字
var ageAsString = mayReturnEitherStringOrNumber(true);
console.log(typeof ageAsString);

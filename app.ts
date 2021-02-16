console.log('Hello TypeScript');

//typescript資料類型
console.log('Number類型');
//number
let num1:number = 1000;
let num2:number = 10.2;
console.log(num1);
console.log(num2)
console.log(typeof num1);
console.log(typeof num2);

function add(num4:number,num5:number){
    let num6 = num4 + num5;
    console.log(num6)
}

add(10,20);

console.log('最大值',Number.MAX_VALUE);
console.log('最小值',Number.MIN_VALUE);

console.log('String類型');
//string
let str : string = 'Vanes';
console.log(str);

let str2 : string = "";
let str3 = "";
let str4 : string ="";
let empName : string = 'Vanes';
let empDept : string = "Software";

let output : string = empName + "在" + empDept + "工作";
let output1:string = `${empName}在${empDept}工作`

console.log(output);
console.log(output1);

let str6 : string = "123"

//boolean
console.log('Boolean類型');

let isActive : boolean = true;
let isUpdated : boolean = false;
console.log(isActive);
console.log(typeof isActive);

console.log(isUpdated);
console.log(typeof isUpdated);

//void
console.log('Void類型');

//void類型是函式return的一種定義，他確定函式沒有return
//一般變數沒有void類型，因為變數中可以設置undefined或null

function show():void{
    let num:number = 10;
    console.log(num);
    //void不許有return 確切值，但可以return undefined
}

show();

let a : void;
console.log(a);//undefined
console.log(typeof a);//undefined

//null
console.log('null類型');
//null表示變數值為空

let aa : null = null;
aa = null;

//undefined
console.log('undefined類型')
//undefined類型表示為賦值的狀態

let ud : undefined;
ud = undefined;
console.log(ud);

//any類型
console.log('any類型');
//any類型可以避免類型檢測錯誤，api串接時可以避免錯誤。
let an : any;
an = "Taiwanese";
an = 10;
an = true;

function addAny(a:any,y:any):void{
    let z:any;
    z = a + y
    console.log(z)
}

addAny('Su',' Ch');

//array類型
console.log('array類型');

//定義方式：
//1.加上[]
let arr1:number[]=[1,2,3];
let arrStr:string[] = ['1','2','3']
let arrAny:any[] = [1,'2',3]
//變數名稱後面加上number型別，代表字串之中只能有numer

//泛型類型定義方式
let arr2:Array<number> = [1,2,3]

//tuple類型
let user:[number,string,string,boolean];
user = [10,'Vane','Su',true];
console.log(user);

let emp:[number,string][];

emp = [
    [10,'Vane'],
    [5,'Oliver'],
    [12,'Ocean']
];

console.log(emp);

emp.push([14,'a'])

//enum枚舉
let arrDes = [1,'sfsdg',true]
console.log(...arrDes);

enum color {
    red = 1,
    green = 5,
    blue
}

console.log(color.blue)

enum direction {
    up = 'up',
    down = 'down',
    right = 'right',
    left = 'left'
}

console.log(direction.left);

//function類別
console.log('function類型');

function display(){
    console.log('Hello World!');
}

display();

function addFunc(num1:number,num2:number):number{
    return num1 + num2;
}

console.log(addFunc(1,2));

function showFunc():string{
    return "Hello World"
}

console.log(showFunc());

//interface類型
console.log('interface類型');
//interface是對規範的約束與制定

interface keypair{
    key:number;
    value:string;
}

interface cal{
    sumCal(first:number,second:number):number;
}

function showInterface(){
    // let kp1:keypair = {1,"value"} //wrong
    let kp2:keypair = {key:1,value:'Olie'}
    let kp3:keypair = {value:'Dido',key:10}
}

let calculator:cal = {
    sumCal(first:number,second:number){
        return first + second;
    }
}

console.log(calculator.sumCal(1,2));

//Generic泛型類型
//泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。
//https://willh.gitbook.io/typescript-tutorial/advanced/generics
//https://magiclen.org/typescript-generics/
console.log('Generic類型');
console.log('泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。')
function showGeneric<T>(args:T):T{
    return args
}
//<T>代表呼叫時自行填入資料型態。
let op1 = showGeneric<string>('Hello World');
let op2 = showGeneric<number>(123);
console.log(op1);
console.log(op2);


//never類型，非常少用到
console.log('never類型');
//never類型是其他的意思，包含了undefined和null，意味其只能被never賦值。

let tpNever : undefined;
tpNever = undefined;
let tpNever1 : null;
tpNever1 = null;

let tpNever2 : never

// tpNever2 = (()=>{
//     throw new Error('錯誤訊息')
// })();

//函式定義
function work():string{
    return 'work'
}

console.log(work());

const work1 = function():number{
    return 123;
}

console.log(work1());

//參數
function getUser(name:string = 'Vane',age:number = 12):string{
    return `${name}年齡是${age}`;
}

console.log(getUser('Vane',12));

const getInfo = function(name:string,age:number):string{
    return `${name}年齡是${age}`
}

console.log(getInfo('Vane',12))

//剩餘參數
function sum(a:number,b:number,c:number,...args:number[]):number{
    let total:number;
    total = a + b + c;
    args.forEach(item=>{
        total += item;
    })
    return total;
}

console.log(sum(1,2,3,4,5))

//函式重載
console.log('函式重載');
//為類似功能的函式提供了統一名稱，然而根據參數列個數或型態的不同，由編譯器選擇要呼叫的函式，函式重載令開發者在設計函式名稱可以簡便一些。 重載時可以根據參數資料型態，也可以根據參數的個數，或是兩者的結合，不過傳回型態不能作為重載的依據。
function getMulUser(name:string):string;
function getMulUser(age:number):number;

function getMulUser(str:any):any {
    if(typeof str === 'string'){
        return '我叫:' + str;
    }else {
        return '我的年齡是：' + str;
    }
}

console.log(getMulUser('Vane'));

//class：
class Person{
    name:string;//前面省略了Public
    constructor(n:string) {
        //實例化時自動產生
        this.name = n;
    }

    getName():string {
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }
}

let p = new Person('Oliver');
console.log(p.getName())
p.setName('Oli');
console.log(p.getName())

//類的繼承操作
class Student extends Person{
    //extends實現的是類的繼承
    constructor(name:string){
       super(name) //初始化父類的建構函式。
    }
    work():void{
        console.log(`${this.name}正在work`);
    }

    getName():string{//子類如果出現何父類一樣的方法名稱，子類會覆蓋父類名稱 
        return `我的名字`
    }
}

let cs = new Student('OOl');

console.log(cs.getName());

//class 修飾符
//public 公共 在當前類、子類、全域都可訪問。
//protected 保護 在當前類、子類可以訪問、外部無法訪問。
//private 私有 在當前類可以訪問，但在子類與外部無法訪問。
//所以的屬性若不加修飾符則默認為public
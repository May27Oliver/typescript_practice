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
    [5,'Oliver']
];

console.log(emp);

emp.push([14,'a'])

//enum枚舉
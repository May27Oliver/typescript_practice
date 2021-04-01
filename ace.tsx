//型別註記Type Annotation

//註記一：註記在變數前面
const message: string = 'Hello World';

//函式型別的註記
function mayReturnEitherStringOrNumber(b: boolean):string | number {
  if(b){
    return '20';
  }else{
    return 20;
  }
}
//註記形式(二) 此處有誤
// const age = <number>mayReturnEitherStringOrNumber(false);

// console.log(typeof age);

//型別註記(三) ：註記在未知的值，但使用as關鍵字
const ageAsString = mayReturnEitherStringOrNumber(true) as string;

console.log(typeof ageAsString);

let myName = 'Maxwell';
let age = 20;
let hasPet = false;
//null undefined被稱為null types，會被認定為any
let nothing = undefined;
let nothingLiterally = null;

//辨認物件屬性型別
interface AcePerson {
  name:string
  age:number
  [propName: string]: any
}
let maxwell : AcePerson = {
  name: 'Maxwell',
  age: 20,
  gender:'male'
}

let someone = {
  knows: undefined,
  identity: null
}

//函式內投入參數的物件型別
//在宣告函式時，我們會為參數設計物件類型，定義未來會投入這個參數的物件
interface AceGetNameProps{
  name:string
  age:number
  gender:string
  [propName:string]:any
}

const getName = (props:AceGetNameProps) => {
  console.log('name:',props.name);
  console.log('age',props.age);
  console.log('gender',props.gender);
}

//但傳入的參數有時會遠遠大於定義好的interface，此時就會報錯。
//處理這種問題三種方法
//1.Type Assertion
getName({name:'Quan',age:21,gender:'secrete',hasPet:true} as AceGetNameProps);

//2.將物件放入變數之中
let AceSomeone = {name:'Quan',age:21,gender:'secrete',hasPet:true};
getName(AceSomeone);

//3.在interface上加入[propName:string]:any屬性
getName({name:'Quan',age:21,gender:'secrete',hasPet:true});


//函式型別註記
let aceExfn:()=>void;

aceExfn = () => {
  console.log('jojo');
}

const addition = (num1:number,num2:number):number => {
  return num1 + num2;
}

//陣列型別
//字串陣列
let aceArr : string[];
aceArr = ['Harry','tier','cat'];

//有字串有數字陣列
let aceArr1 : (string | number )[];
aceArr1 = ['Harry']

//陣列物件
type aceArr2Type={
  name:string,
  age:number
}

let aceArr2 : aceArr2Type[]

aceArr2 = [
  {
    name:'KT',
    age:20
  },
  {
    name:'NY',
    age:100
  }
]

//函式多載
function getUser(name:string , age:number){
  if(arguments.length ===1){
    return arguments[0]
  }else{
    return arguments[0] + arguments[1];
  }
}

//typescript多載
function getUser(name:string):string;
function getUser(age:number):number;

function getUser(str:any,age:number):any{
  if(typeof str === 'string'){
    return '我是：' + str;
  }else{
    return '我年齡：'+ age;
  }
}

//arrow function
// let p = {
//   data:{
//     flag:true,
//   },
//   init:()=>{
//     console.log(this);//箭頭函式沒有this，會指全域
//   }
// }

//es5 class
function classPerson(this:
  {
    name:string,
    age:number,
    work:()=>void,
    // [propName:string]:any
  }
){
  this.name = 'Vane';
  this.age = 42;
  this.work = function(){
    console.log('work');
  }
}

// classPerson.prototype.married = true;
// classPerson.prototype.play = function(){
//   console.log('play');
// }

//static靜態方法無法透過new的實例來調用

var p = new classPerson();
console.log(p.name);
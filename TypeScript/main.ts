export {}
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'CodeVolution';

let isBeginner: boolean = true;
let total:number = 0;
let name:string = 'Vishwas';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName:string = undefined;

isNew = true;
//Both make arrays
let list1:number[] = [1,2,3]
let list2:Array<number> = [1,2,3]


//mixed type arrays
let person1: [string, number] =['chris',22];


enum Color{Red =5,Green, Blue};

let c: Color = Color.Green;
console.log(c);


//any when you don't know what the type is
let randomValue: any = 10; 
randomValue = true;
randomValue='Vishwas';





//union of types
 let multiType: number | boolean;
 multiType = 20;
 multiType = true;
 //? makes optional parameter
 // optional have to be after requried

 function add(num1: number, num2:number = 10):number{
     if(num2)
         return num1 + num2;
    else
        return num1;
     
 
 }
 add(5,10);
 add(5);
 interface Person {
     firstName: string;
     lastName: string;
 }


 function fullName(person: Person){
     console.log(`${person.firstName} ${person.lastName}`)
 }
 let p = {
     firstName:'Bruce',
     lastName:'Wayne'


 };

 fullName(p);

 class Employee {
     employeeName: string;

     constructor(name: string){
         this.employeeName = name
     }
     greet(){
         console.log(`Good Morning ${this.employeeName}`)
     }
 }

 let emp1 = new Employee('Vishwas');
 console.log(emp1.employeeName);
 emp1.greet();


class manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);



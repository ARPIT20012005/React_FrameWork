// //Annotation

// //Strings

// let myName: string = "Arpit";
// console.log(myName);

// // //Numbers

// let favNumbers: number = 20;
// console.log(favNumbers);

// // //Boolean

// let tsHard: boolean = false;
// console.log(tsHard);

// // Type Inference

// let tech = "TypeScript";
// let favNumber = 8;
// let isTypeScriptFun = true;

// console.log(tech, favNumber, isTypeScriptFun);

// //Any Type

// let color: any = "teal";
// color = 30;
// color = true;
// console.log(color);

// // Functions Parameters Annotation

// function addone(num: number) {
//   return num + 1;
// }
// const result = addone(20);
// console.log(result);

// // Arrow Function

// const adddouble = (x: number, y: number) => {
//   return x + y;
// };
// const results = adddouble(20, 26);
// console.log(results);

// // Default Paramerters Value

// function greet(person = "Annoymoue") {
//   return `Hello ${person}`;
// }

// const resultss = greet("Arpit");
// console.log(resultss);

// // return annotation (regular)

// function double(x: number): number {
//   return x * x;
// }
// const res = double(20);
// console.log(res);

// const double1 = (x: number): number => {
//   return x * x;
// };
// const ress = double1(8);
// console.log(ress);
// console.log(double(30));

// //Void in Ts

// function mymsg(msg: string): void {
//   console.log(`This is my ${msg} `);
// }

// mymsg("hello to everyone");

// //Never

// //. A function that always throws an error
// //. A function that has an infinite loop
// //. a function that can never have a value

// // Array Types

// //2 Types of Array

// // using the square bracket notation [] to indicate an array of a specific type
// // Using the generic Array<type> notation to indicate an array of a specific type

// // [] Notation
// const nums: number[] = [1, 2, 3, 4, 5];
// const str: string[] = ["Arpit", "Anvay"];
// console.log(str);

// // array <type> notation

// const items0: Array<string> = ["one", "two", "three"];
// const items1: Array<number> = [1, 2, 3, 4, 5];
// const items2: Array<boolean> = [true, false, true];
// console.log(items0, items1, items2);

// // Multidimensional Array

// const singleDi: number[] = [1, 2, 3, 4, 5];
// const multiDi: number[][] = [[1, 2, 3, 4, 5]];
// const tripleDi: number[][][] = [[[1, 2, 3, 4, 5]]];
// console.log(singleDi);
// console.log(multiDi);
// console.log(tripleDi);

// // Object Types
// // syntax
// // type varName(annotation/type)={property:value}

// const User: { name: string; lastname: string; age: number; language: string } =
//   {
//     name: "Arpit",
//     lastname: "Choudhari",
//     age: 20,
//     language: "TypeScript",
//   };
// console.log(User);
// console.log(`Name: ${User.name} ${User.lastname}, Age: ${User.age}, Programinglanguage: ${User.language}`);

// function meUser(): { Name: string; age: number; location: string } {
//     return {
//         Name : "Arpit",
//         age : 20,
//         location : "India",
//     }
// }
// const me = meUser();
// console.log(`Namee:${me.Name}, Age: ${me.age}, Location: ${me.location}`);

// // Type Aliases

// type User = {
//     name: string;
//     age: number;
//     location: string;
// }
// const  UserInfo = (Info:User) => {
//     return `Nme: ${Info.name}, Age: ${Info.age}, Location: ${Info.location}`

// };
// const ressss = UserInfo({name: "Arpit", age: 20, location: "India"});
// console.log(ressss);

// // OPtional Properties and readonly properties

// type Userr = {
//     name: string;
//     age?: number;
//     readonly location: string;
// };

// const user :Userr = {
//     name: "Arpit",
//     location : "India",

// };

// console.log(`Name: ${user.name}, Location: ${user.location}`);

// // Intersection Type

// type UserInfo = {
//     first : string;
//     last : string;
//     age : number;
// };
// type AccountDetails={
//     email: string;
//     password: string;
// };

// type Mearge = UserInfo & AccountDetails; // intersection type
// const Me : Mearge = {
//     first : "Arpit",
//     last : "Choudhari",
//     age : 20,
//     email: "arpit@20gmail.com",
//     password: "123456",
// };

// console.log(
//     `Name: ${Me.first} ${Me.last}, Age: ${Me.age}, Email: ${Me.email}, Password: ${Me.password}`

// )

// // Unions

// let password : string | number = 20;

// type UserInfoo = {
//   first : string,
//   last : string,
//   age : number,

// };

// type AccountDetailss = {
//   email : string,
//   password: string,
// };

// let userr : UserInfo | AccountDetails = {
//   email : "Someone@gmail.com",
//   password : "password20",
// };

// const items : (number | string)[] = [userr.email,userr.password];
// console.log(items);

// // Literal Type(allow you to specify a value that can only be one specific literal value)

// //Tuples

// let mytuple : [number, string];
// mytuple = [20, "hello world!"];
// console.log(mytuple);

// const productss : (number | string)[] = ['item 1', 12]
// console.log(productss)

// // Enums

// enum weatherCondition {
//   Sunny = 'sunny',
//   Cloudy = 'cloudy',
//   Rainy = 'rainy',
//   Snowy = 'snowy',
// }
// const CurrentCondion = weatherCondition.Rainy;
// console.log(CurrentCondion);

// // Class Properties Annotations

// class Person {
//   nam : string;
//   umar : number;

//   constructor(nam: string, umar: number) {
//     this.nam = nam;
//     this.umar = umar;

//   }
// }

// const person = new Person("Arpit", 30);
// console.log(person);

// // access modifiers (public, private, protected )

// // getters and setters

// class Myclass {
//   private _myProperty: number = 0;

//   get myProperty(): number {
//     return this._myProperty;

//   }
//   set myProperty(value: number) {
//     this._myProperty = value;
//   }
// }

// const myInstance = new Myclass();

// console.log(`current value : ${myInstance.myProperty}`);
// myInstance.myProperty = 20;
// console.log(`current value : ${myInstance.myProperty}`);

// // Interface

// interface Movie {
//   name : string;
//   rating : number;
//   genra? : string;

// }

// const movie1: Movie = {
//   name : "Star Wars",
//   rating : 8.9,
//   genra : "Action",
// };
//  console.log(movie1.name);
//  console.log(movie1.rating);
//  console.log(movie1.genra);

//

// interface MovieDetails {
//   readonly name: string;
//   ratings : number;
//   printMovieInfo(name: string, price : number, ratingss: number):string | number;
// }

// interface MovieGenra extends MovieDetails {
//   genra : string;
// }

// const movie12 : MovieGenra = {
//   name : "star wars",
//   genra : "Action",
//   ratings : 8.9,
//   printMovieInfo(
//     name : string,
//     price : number,
//     rating : 8.9,
//   ): string | number {
//     return ` Movie name : ${name} Price: ${price} Rating: ${rating}`;

//   },
// };

// const res1 = movie12.printMovieInfo("John Wick", 100, 8.5)
// console.log(res1);

// Declaration Merging

// interface Car {
//   brand : string;
//   start(): void;

// }

// interface Car {
//   model : string;
//   stop(): void;
// }

// const myCar : Car = {
//   brand : "BMW",
//   model : "M3",
//   start() {
//     console.log("start");
//   },
//   stop() {
//     console.log("Stop");
//   },
// };

// myCar.start();
// myCar.stop();

// Generics

// function printNumber (item : number, defaultValue: number): [number, number] {
//   return [ item, defaultValue];
// }

// const num = printNumber(20, 8);// (20, 08) this is not allowes in Ts 08 , it should be only 8.
// console.log(num);

/// generics

// function Yo<Type>(item: Type, defaultValue: Type): [Type, Type] {
//   return [item, defaultValue];
// }

// const res2 = Yo<number>(20, 8);
// const res3 = Yo<string>("hello", "world");
// console.log(res2); 
// console.log(res3);


// class Box <T> {
//   private content : T ;

//   constructor(initalContent: T) {
//     this.content = initalContent;
//   }

//   getContent(): T {
//     return this.content;
//   }


//   setContent(newContent:  T): void {
//     this.content = newContent ;
//   }
// }

// const numberBox = new Box<number>(20);
// console.log(numberBox.getContent());

// Type Narrowing 

//1. Type Guards

// type MyType = string | number;

// function exampleFunction(value: MyType): void {
//   if(typeof value == "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// exampleFunction("hello,world!!!");
// exampleFunction(24);

// //2. Instanceof operator  

// class Dog {
//   bark(): void {
//     console.log("Woff Woff");
//   }
// }

// class Cat {
//   meow(): void {
//     console.log("meow");
//   }
// }

// function animalSound(animal: Dog | Cat) : void {
//   if(animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }
// const myDog = new Dog();
// const myCat = new Cat();
// animalSound(myDog);
// animalSound(myCat);

//3. Intersection types [&]



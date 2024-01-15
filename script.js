// Classes & Object 

// Prototype in js - A javascript object is an entity having state and bahavior (properties and method).
// JS object have a special property called prototype.
// we can set prototype using __proto__

// if object & prortotype have same method, object's method will be used.

// const student = {
//     fulName : "nilesh bhoi",
//     marks : 94.4,
//     printMarks: function () {
//         console.log("marks =", this.marks);
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
//     /*clacTax: function () {
//         console.log("tax rate is 10%");
//     }*/
// };

// const karanArjun = {
//     salary: 50000,
// };

// const karanArjun2 = {
//     salary: 50000,
// };

// const karanArjun3 = {
//     salary: 50000,
// };

// const karanArjun4 = {
//     salary: 50000,
// };

// karanArjun.__proto__= employee;
// karanArjun2.__proto__= employee;
// karanArjun3.__proto__= employee;
// karanArjun4.__proto__= employee;


// 2)

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__= employee;


//==========================



// Classes in JS 

/* class in a progarm-code tmeplate for creating objects.
 those objects have some state (variables) & some behaviour (functions) inside it.

 class Myclass {
    constructor() {....}

    myMethod() {....}
 }
 let myObj = new MyClass();

*/

// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("creating new object");   
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
//     // setBrand(brand) {
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner", 10);// constructor
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus", 12); // Constructor
// console.log(lexus);
// // lexus.setBrand("lexus");

/* 
 * Consturctor()method is:
    * automatically invoked by new
    * initializes object 
    class MyClass  {
        constructor(){...}
        myMethod() {....}
    }

*/

//============================

/*

Inheritance in js 
inheritance is passing down properties & method from parent class to child class.

class Parent {

}

class Child extends Parent {

}

* if child & parent have same method, child's method will be used.[Method Overriding]

*/

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

//==============================

// class person {
//     constructor() {
//         this.spacies = "home sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("Do nothin");
//     }
// }

// class Engineer extends person{
//     work() {
//         console.log("solve problems , build somthing");
//     }
// }
// class Doctor extends person{
//     work() {
//         console.log("treat patients");
//     }
// }

// let nileshObj = new Engineer();

//===============================

/*
super Keyword 
the super keyword is used to call the constructor of its parent class to assess the parent's properties and methods. 

super(args) // calls Parent's contructor 

super.parentMethod(args)

*/
//  1)
// class person {
//     constructor() {
//         console.log("enter parent contructor");
//         this.spacies = "home sapiens";
//         console.log("exit parent constructor");
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends person{
//     constructor(branch) {
//         console.log("enter child contructor");
//         super(); //to invoke parent class contructor
//         this.branch = branch;
//         console.log("exit child conttructor");
//     }
//     work() {
//         console.log("solve problems , build somthing");
//     }
// }


// let engObj = new Engineer("chemical engineer");

//  2)
// class person {
//     constructor(name) {     
//         this.spacies = "home sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends person{
//     constructor(name) { 
//         super(name); //to invoke parent class contructor
            
//     }
//     work() {
//         super.eat();
//         console.log("solve problems , build somthing");
//     }
// }


// let engObj = new Engineer("nilesh");

//=========================

/*
Let's Practice
Qs. 1 ) You are creating a website for your collage.Create a class user with 2 properties, name & email. it also has a method called viewData() that allows user to view website data.
*/
// Ans =

// let DATA = "secrate information";
// class User  {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data =",DATA);
//     }
// }

// let student1 = new User("Nil","abc@gmail.com");
// let student2 = new User("susu","sjsj@gamail.com");

// let teacher1 = new User("teacher","teacher234@gmail.com");


/*
Qs.Create a new class called Admin which inherits from User. Add a new method called edit to admin that allows it to edit website data.
*/
// Ans = 

// let DATA = "secrate information";
// class User  {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data =",DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "some new value :";
//     }
// }



// let student1 = new User("Nil","abc@gmail.com");
// let student2 = new User("susu","sjsj@gamail.com");

// let teacher1 = new User("teacher","teacher234@gmail.com");

// let admin1 = new Admin("admin dada","admin@gmail.com");


//=========================

/*
Error handling
try-catch

  try {
    ...normal code
  } catch(err) { // err is error Object
        ..handling error
  }
*/

// code

let a = 5;
let b = 10;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
try {
    console.log("a+b =",c+b);
} catch (err) {
    console.log(err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);

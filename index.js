// // console.log("");

// // console.log("Hello world");
// // ?section 3
// // var myName = "Ningsang Jabegu";
// //var = key
// //myName = variable name
// //Ningsang Jabegu = value
// //Naming convension
// //first letter : not number and special character, can be (underscore, letter, dollar)

// // C1. Naming variables:
// // var myAge = 21;
// // var _myName = "Ningsang";
// // var _1my__Name = "Hang";
// // // var 1myName = "Jabegu";
// // var $myName = "My bootcamp";
// // console.log($myName);

// //Section 2: datatypes in javascripts
// //undifined, boolean, number, string, bigint, symbol
// //developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structure
// //  var myName = "Ningsang Jabegu"; // string
// //  console.log(myName); //
// //  var myAge = 21; //number
// // var iAmJabegu = true; //boolean

// //typeof operator
// //  console.log(typeof(myAge));

// //C2. Data types practice
// // console.log(10+"20"); //1020
// // console.log(10-"20"); //bug
// // console.log("Java" + "Script"); //JavaScript
// // console.log(" " + " "); //
// // console.log(" " + 0); //0
// // console.log("Ningsang" -"Jabegu"); //NaN
// // console.log(true+true); //2 => 1+1
// // console.log(true+false); //1 => 1+0
// // console.log(false + true);//1 => 0+1
// // console.log(false-true); //-1 => 0-1

// //Interview Question:
// //Difference between null vs undefined?
// // var iAmUseless = null;
// // // console.log(iAmUseless); // null
// // console.log(typeof(iAmUseless)); // object // 2nd JS bug
// //  var iAmStandby;
// //  console.log(iAmStandby); // undefined
// //  console.log(typeof(iAmStandby));

// //Interview Question: 2nd
// //Waht is NaN
// //NaN is a property of the global object.
// //In other words, it is a variable in global scope.
// //The initial value of NaN is Not-A-Number

// // var myPhoneNumber = 9806060663;
// // var myName = "Ningsang Jabegu";

// // console.log(isNaN(9806060663));// false
// // console.log(isNaN(myName)); // true

// // if(isNaN(myName)) {
// //     console.log("Please enter a valid number.");
// // }

// //c3:
// // console.log(NaN === NaN); //false
// // console.log(Number.NaN === NaN); //false
// // console.log(isNaN(NaN)); //true
// // console.log(Number.isNaN(NaN)); //true

// //Section 3: Expressions and Operators

// // console.log(5+20); // 5=> oparand + => operator and (5+20) > expression
// // Assignment Operator: assigns left operand to right operand

// var x = 5;
// var y = 5;

// // console.log("is both the x and y equal or not" + x == y); //false
// // console.log(x==y); // true
// // console.log(`is both the x and y equal or not : ${x == y}`); //true

// //Arithmetic Operator
// // console.log(3+3);
// // console.log(10-5);
// // console.log(20/5);
// // console.log(5*6);
// // console.log("Remainder Operator " +  27%4);

// //increment and decrement operator
// //x++ or ++x and x-- or --x
// //If used postfix operator after operand
// // var num = 15;
// // var newNum = num++ +5; //num +5
// // console.log(num); //16
// // console.log(newNum); //15

// // prefix operator ==> var is incremented first
// // var num = 15;
// // var newNum = ++num +5; //num +5
// // console.log(num); //16
// // console.log(newNum); //15

// // DecrementOperator
// // var num = 15;
// // var newNum = --num +5; //num +5
// // console.log(num); //16
// // console.log(newNum); //15

// // Comparision Operator
// // returns boolean operand

// // var a = 30;
// // var b = 10;
// // console.log(a == b);

// // var a = 30;
// // var b = 10;
// // console.log(a != b);

// // console.log(a>= b); // and other comparisions

// //logical Operator
// //returns boolean
// var a = 30;
// var b = 20;
// //logical or (||), logical and (&&), logical not
// //  console.log(a>b&&b<0); //false
// // console.log((a>b||a<0)); //true
// // console.log(a>b&&b<0&&a>b&&b<0); //ctr +
// // console.log(!(a>0)||(b<0));
// // console.log(!false);
// // console.log(!true);

// // String operators
// // string concatination operator (+)
// // console.log("Hello Qote");
// // console.log("Helllo " + "Quote");
// // var myName = "Ningsang";
// // console.log(myName + " Jabegu");
// // console.log(myName + " Hang Jabegu");

// // C3:
// // What will be the output of  3**3?
// // console.log(3**3); //3^3 = 27 //exponentiation operator
// // console.log(10 ** -1);

// // What will be the output when we add number with string
// // console.log(5 + "Ningsang");

// // write to swap a number;
// // var a = 5;
// // var b = 10;
// //output b =5, a=10
// // var c = b; //10
// // b = a;
// // a = c;
// // console.log(a,b);

// //without using third variable
// // var a = 5;
// // var b = 10;

// // a = a + b; // 5+10 =15;
// // b = a - b;
// // a = a - b;
// // console.log(a,b);

// // Interview Question
// // What is the difference between == and ===

// // var num1 = 5;
// // var num2 = "5";
// // // console.log(typeof(num1));
// // // console.log(typeof(num2));
// // // console.log(num1 == num2);
// // console.log(num1 === num2);

// //Section 4: Control Statement and Loops
// //if.Else statement
// // var tomr = 'sunny';
// // if(tomr == 'rain'){
// //     console.log("Take a raincoat.");
// // } else {
// //     console.log("Dont take raincoat.");
// // };

// //C4: write a program that works out whether if a
// //given year is a leap year (366)or not? (4year after)
// //https://www.mathsisfun.com/leap-years.html

// // var year = 2020;
// // debugger;
// // if(year % 4 === 0) {
// //     if(year % 100 === 0) {
// //         if(year % 400 === 0 ) {

// //         } else {
// //             console.log("The year " +year + "is a leap year");
// //         }
// //     } else {
// //         console.log("The year " +year + "is a leap year");
// //     }
// // }
// // else{
// //     console.log("The year " +year + "is not a leap year");
// // }

// //challenge ...
// //What is truthy and falsy values in Javascript
// //5 falsy value total in Js
// //0, "",undefined, null, NaN, false
// // if(true) {
// //     console.log("OMG,we loose the game");
// // }else {
// //     console.log("Yay, we won the game");
// // }

// //ternary operator (conditional) // 3 oparands
// //variablename = condition ? value1:value2
// // var age =17;
// // if(age>=18) {
// //     console.log("You are eligible to vote");
// // } else {
// //     console.log("You are not eligible to vote");
// // }
// //  var age = 18;
// //  console.log((age >= 18) ? "You are eligible to vote":"You are not eligible to vote");

// //switch statement
// //find the area of circle, triangle and rectangle?
// //area = reactangle
// // var area = 'rectangle';
// // var PI = 3.1415,l = 5,b=4,r=3;
// // if(area =='circle') {
// //     console.log("The area of circle is :" + PI*r**2);
// // } else if (area == "triangle") {
// //     console.log("The area of triangel is " + (l*b)/2);
// // } else if (area == "rectangle") {
// //     console.log("The area of rectangle is " + (l*b));
// // } else {
// //     console.log("Please enter valid data");
// // }
// //break statement
// // var area = 'trigle';
// // var PI = 3.1415,l = 5,b=4,r=3;
// // switch(area){
// //     case 'circle':
// //         console.log("The area of circle is :" + PI*r**2);
// //         break;

// //     case 'triangle':
// //         console.log("The area of triangel is " + (l*b)/2);
// //         break;

// //     case 'rectangle':
// //         console.log("The area of rectangle is " + (l*b));
// //         break;

// //     default:
// //         console.log("Please enter valid data");
// // }

// //while loop
// // var num = 10;
// // //block scope
// // while(num <= 10) {
// //     console.log(num);//infinite loop
// //     num++;
// // }

// //do.while loop
// // var num = 20;
// // debugger;
// // do{

// //     console.log(num);//infinite loop
// //     num++;
// // }while(num <= 10)

// //for loop
// // for(var num = 0; num<= 10; num++) {
// //     debugger;
// //     console.log(num);
// // }

// //c ...
// //Javascript program to print table for given number
// //(8,9,12,15) using for Loop?

// //output : 8 X 1 = 80
// // var tableOf = 200;
// // for(var a = 1; a<=10; a++) {
// //     console.log(tableOf + " X " + a + " = " + tableOf*a);
// // }

// //section 5: functions in JavaScript
// //function defination (declearation, statement)
// // var a = 10;
// // var b = 20;
// // var sum = a+b;

// // function sum() {
// //     var a=10, b=20;
// //     var total = a+b;
// //     console.log(total);
// // }
// // // console.log(sum());
// // sum();

// //challenge
// //What is the different between function paramenter
// //vs function argument
// // function sum(a,b) {//parameter passing
// //     // var a=10, b=20;
// //     var total = a+b;
// //     console.log(total);
// // }
// // // console.log(sum());
// // sum(); //no argument
// // sum(20,30);//arguments passing
// // sum(50,50);

// // 4. Interview Questions :Why Functions??
// // reuse of code, define onse and use many times
// // DRY - Do not Repeat Yourself

// //Function expressions
// //create a function and put it in variable

// // function sum(a,b) {//parameter passing
// //     // var a=10, b=20;
// //     var total = a+b;
// //     console.log(total);
// // }
// //  var funcExp = sum(5,100); //not a complete expression
// //  funcExp;

// //return keyword
// // function sum(a,b) {//parameter passing
// //     // var a=10, b=20;
// //     var total = a+b;
// //     return total
// // }
// //  var funcExp = sum(5,100);
// //  console.log('The sum of two number is ' + funcExp);

// //Anonymous function expression
// //  var funcExp = function (a,b) {//parameter passing
// //     return total = a+b;
// // }
// // // console.log(funcExp(5,25));
// // var sum = funcExp(5,25);
// // var sum1 = funcExp(5,50)
// // //  console.log('The sum of two number is ' + sum);
// // console.log(sum1>sum);

// // ECMA Script ****************************
// // modern javascript
// // 1996 - first JS created
// // 1997 - ECMA International standarization (ECMAScript) and update every year
// // 2015 - ES6 - decided to switch to annual releases of ECMAScript
// //      - ECMAScript 2015 (6th edition) (ES6)
// //      - Let and Const, Template strings, default arguments
// //      - destructuring, Object properties, Arrow Function
// //      - Rest operator, Spread Operator
// // 2016 - ECMAScript 2016 (7th edition) (ES7)
// // 2017 - ECMAScript 2017 (8th edition) (ES8)
// // 2018 - ECMAScript 2018 (9th edition) (ES9)
// // 2019 - ECMAScript 2019 (10th edition) (ES10)
// // 2020 - ECMAScript 2020 ( 11the edition) (ES11)

// //Features of ECMAScript 2015 also known as ES6

// //let vs const vs var
// // var myName = "Jabegu Ningsang";
// // console.log(myName);

// // var myName = "Ningsang Jabegu";
// // console.log(myName);

// // let myName = "Jabegu Ningsang";
// // console.log(myName);

// //  myName = "Ningsang Jabegu";
// // console.log(myName);

// // const myName = "Jabegu Ningsang";
// // console.log(myName);

// //  myName = "Ningsang Jabegu";
// // console.log(myName);

// //function scope and block scope

// // function biodata() {
// //   var myFristName = "Jabegu Ningsang";
// //   console.log(myFristName);
// //   if (true) {
// //     var myLastName = "Hang";
// //     console.log("Inner :" + myLastName);
// //     console.log("Outer :" + myFristName);
// //   }
// //   console.log("Inner Outer :" + myLastName);
// // }
// // biodata();
// // console.log(myFirstName); //sends error because it is outside of scope
// // var => function scope

// // let and const => block scope

// // Template literals (Template strings)
// // JavaScript program to print table for given number (8)?
// // output: 8 X 1 = 8
// // for(let num =1; num<=10; num++) {
// //     let tableOf = 12;
// //     console.log(`${tableOf} X ${num} = ${tableOf *num}`);
// // }

// // Default Argument
// // function mult(a,b=5) {
// //     return a*b;
// // }
// // // console.log(mult(5)); //NaN
// // console.log(mult(5)); //25
// // console.log(mult(6,5)); //30

// // Fat Arrow Function
// // Normal way of writing function
// // console.log(sum());
// // function sum() {
// //     let a=5,b=6;
// //     let sum = a+b;
// //     return `the sum of the two number is ${sum}`;
// // }
// //How to convert it into fat arrow (=>) function
// // // console.log(sum()); // cannot access 'sum' before initialization
// // const sum = () => {
// //     let a=5,b=6;
// //     // let sum = a+b;
// //     return `the sum of the two number is ${a+b}`;
// // }

// // const sum = () => {
// //     let a=5,b=6;
// //     // let sum = a+b;
// //     return `the sum of the two number is ${(a=5)+(b=6)}`;
// // }

// // const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;
// // console.log(sum());

// // Section 6 : Arrays in Javascript
// // var => only store one value at a time.
// // var friend1 = 'ramesh';
// // var friend2 = 'Krishna';
// // var friend3 = 'Vishal';

// // Array class, and array is the protorype of class
// // var myFriends = ['ramesh',22,'male','Krishna',22,'male','Vishal',22,'male']; 
// // In other programming languages no different type is stored in an array
// // In JavaScript any type of data is added or can be added.
// // data => 1st element === Lower Index/Lower boundry
// // data => last element === Upper Index/Upper boundry
// // data => index starts from 0 and incremented by 1...
// // data => 'ramesh' => index 0
// // data => 'male' => index array.length-1

// // var myFriends = new Array; // not mandatory, js automatically do it
// // var myFriends = ['ramesh',22,'male','Krishna',22,'male','Vishal',22,'male']; 
// // Traversal of an array =>navigate through an array

// // var myFriends = ['Ningsang','ramesh','Krishna','Vishal','Suman'];
// // console.log(myFriends[0]);
// //displaying last element (element = 50+)
// // if we want to check the length of elements of an array
// // console.log(myFriends.length);//.length is property [1,2,3,4]
// // console.log(myFriends[myFriends.length-1]);

// // Use for loop to navigate;
// // 'for in loop' and 'for of loop' => introduce in ES6

// // var myFriends = ['Ningsang','ramesh','Krishna','Vishal','Suman'];

// //traditional
// // for (let i= 0; i<myFriends.length; i++) {
// //     console.log(myFriends[i]);
// // }

// // After ES6 we use 'for in' and 'for of' loop
// // var myFriends = ['Ningsang','ramesh','Krishna','Vishal','Suman'];

// // for(let elements in myFriends) {
// //     console.log(elements); // returns the index number when used 'for in' loop
// // }

// // for(let elements of myFriends) {
// //     console.log(elements); // returns the index number when used 'for in' loop
// // }

// //for each loop
// //calls a function for each element in the array
// // var myFriends = ['Ningsang','ramesh','Krishna','Vishal','Suman'];
// // myFriends.forEach(function (element, index, array) {
// //     console.log(element+ " index :" + index +
// //     " "+array);
// //     //no break is needed
// // });
// //  myFriends.forEach((element, index, array) => {
// //     console.log(element+ " index :" + index +
// //     " "+array);
// //  })
//  // fat arrow function do not work with this keyword


//  // Array subSection 2
//  // Array.prototype.indexOf() => search
// //  var myFriendNames = ['Ningsang','ramesh','Krishna','Vishal','Suman'];
// // console.log(myFriendNames.indexOf("Ningsang",2,5)); // returns -1 if not found

// // var myFriendNames = ['Ningsang','ramesh','Krishna','Vishal','Suman','Ningsang'];
// // console.log(myFriendNames.lastIndexOf("ramesh")); // returns -1 if not found

// // var myFriendNames = ['Ningsang','ramesh','NJ','Krishna','Vishal','Suman','Ningsang'];
// // console.log(myFriendNames.includes('ningsang')); // returns boolean value
// // indexOf, lastIndexOf, includes (forward search) => case sensative searching methods

// // find method (search first match value from beginning 0)
// // undefined if not found
// // find and filter method  => search
// // var myFriendNames = ['Ningsang','ramesh','NJ','Krishna','Vishal','Suman','Ningsang'];
// // const array1 = [5, 12, 8, 130, 44]
// // //find number > 12;

// // const newArr = array1.filter((element, index, arr) => {
// //     console.log(`element: ${element}, index: ${index}, array: ${arr}`);
// //     return element > 8;
// // }) 
// // find => element, findIndex => index of element
// // filter => returns all the filtered elements
// // console.log(newArr);

// // Array Subsection 4 Perform CRUD
// // push() => inserts one or more from last
// //           returns the new lenght of the array
// // const animals = ['pigs','goats','sheep'];
// // const count = animals.push('Chicken')
// // console.log(count);

// // animals.push('chicken','cats','cow');
// // console.log(animals);

// // Array.prototype.unshift()

// // const animals = ['pigs','goats','sheep'];
// // // const count = animals.unshift('Chicken')
// // // console.log(count);

// // animals.unshift('chicken','cats','cow');
// // console.log(animals);

// //2nd example
// // const myNumbers = [1,2,3,5];
// // myNumbers.unshift(4,6);
// // console.log(myNumbers);

// // Array.prototype.pop() 
// // changes the length of original array
// // const plants = ['broccoli','cauliflower','kale','tomato','cabbabe'];
// // console.log(plants);
// // console.log(plants.pop());
// // console.log(plants);

// // Array.prototype.shift()
// // remove starting element
// // const plants = ['broccoli','cauliflower','kale','tomato','cabbabe'];
// // console.log(plants);
// // console.log(plants.shift());
// // console.log(plants);

// // challange time
// /*
// only one method
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?
// */
// const months = ['Jan','March','April','June','July'];
// //sol 1:
// // const newMonth = months.splice(months.length,0,'Dec');
// // console.log(months);
// //sol 2:
// // console.log(newMonth); // returns delet item
// //sol 3:

// // const indexOfMonth = months.indexOf('June');
// // if(indexOfMonth != -1) { //if data is not found -1 will return by indexOf() method
// //     const updateMonth = months.splice(1,1,'june');
// // }else {
// //     console.log("No such data found");
// // }

// // console.log(months);

// // sol 4:
// // const indexOfMonth = months.indexOf('June');
// // if(indexOfMonth != -1) { //if data is not found -1 will return by indexOf() method
// //     const updateMonth = months.splice(indexOfMonth,1);
// //     console.log(months);
// //     console.log(updateMonth);
// // }else {
// //     console.log("No such data found");
// // }

// // using infinity
// // const indexOfMonth = months.indexOf('April');
// // if(indexOfMonth != -1) { //if data is not found -1 will return by indexOf() method
// //     const updateMonth = months.splice(indexOfMonth,Infinity);
// //     console.log(months);
// //     console.log(updateMonth);
// // }else {
// //     console.log("No such data found");
// // }

// // Challenge Time -------------
// // Map(), Reduce()
// // Array.prototype.map()
// //  returns an new array but not alter the original array

// const array1 = [1,4,9,16,25];
// // num>9
// // let newArr = array1.map((curElement, index, arr) => {
// //     return curElement > 9;
// // })
// // console.log(array1);
// // console.log(newArr); //  returns [boolean, boolean, ....]

// // let newArr = array1.map((curElm, index, arr) => {
// //     return `Index no = ${index} and the value is ${curElm} belongs to ${arr}`;
// // })
// // console.log(newArr); // return new array

// // let newArrfor = array1.forEach((curElm, index, arr) => {
// //     return `Index no = ${index} and the value is ${curElm} belongs to ${arr}`;
// // })
// // console.log(newArrfor); // returns undefined
// // It returns new Array without mutating the original array
// // map method is chainable ie. map().reduce().sth()

// // 1: Find the square root of each element in an array?
// // let arr = [25, 36, 49, 81];
// // let arrSqr = arr.map((currElem) => {
// //     return Math.sqrt(currElem);
// // }) // can use in one line also
// // console.log(arrSqr);

// // 2: Multiply each element by 2 and return only those
// // // elements which are greater than 10?
// // let arr = [2,3,4,6,8];
// // let arr2 = arr.map((curElem) => curElem *2).filter((curElem) => curElem>10);
// // console.log(arr2);
// // do not need to write return if we have only one code inside braces

// //Reduce Method
// // to flatten an array, 2d or 3d array to 1d array
// // ES 2020 introduced (not need reduce to flatten the array)
// // takes four argument
// /*
// 1. Accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array
// */
// // let arr = [5,6,2];
// // let sum = arr.reduce((accumulator, curElem, index, arr) => {
// //     debugger;
// //     return accumulator *= curElem;
// // },7)
// // console.log(sum);

// // let arr = [2,3,4,6,8];
// // let arr2 = arr
// //             .map((curElem) => curElem *2)
// //             .filter((curElem) => curElem>10)
// //             .reduce((accumulator, curElem,index,arr) => {
// //                 return accumulator =+ curElem;
// //             });
// // console.log(arr2);

// // const arr = [
// //     ['Zone_1', 'Zone_2'],
// //     ['Zone_3', 'Zone_4'],
// //     ['Zone_5', 'Zone_6'],
// //     ['Zone_7', 'Zone_8']];
// // let flatArr = arr.reduce((accum, currVal) => {
// //     return accum.concat(currVal);
// // })
// // console.log(flatArr);

// // const arr = [
// //     ['Zone_1', 'Zone_2'],
// //     ['Zone_3', 'Zone_4'],
// //     ['Zone_5', 'Zone_6'],
// //     ['Zone_7', ['Zone_7', 'Zone_8']]]; // introduce in ES2020 one method that will make all flat
// // let flatArr = arr.reduce((accum, currVal) => {
// //     return accum.concat(currVal);
// // })
// // console.log(flatArr);

// // Section 6: Strings in JavaScript
// // store or manipulate text
// // created as primitives, from string literals, or objects, using the String () constructor;
// // let myName = "Ningsang Jabegu";
// // let myChannelName = 'Web Bootcamp';
// // let ytName = new String("Website ...");
// // let ytName = 'website ...';
// // console.log(ytName);

// // String.prototype.length

// // let myName = "Ningsang Jabegu";
// // console.log(myName.length);

// // Escape Character (backslash)
// // let anySentence = "We are the so-called \"Vikings\" from the north.";
// // console.log(anySentence);
// // if you dont want to mess, simply use the alternate quotes
// // let anySentence = 'We are the so-called "Vikings" from the north.';
// // console.log(anySentence);

// // Findinf a string in a string
// // String.prototype.indexOf(searchValue [, formIndex])

// // const myBioData = 'I am the teb booster';
// // console.log(myBioData.indexOf("t",8));

// // String.prototype.lastIndexOf

// // const myBioData = 'I am the teb booster';
// // console.log(myBioData.lastIndexOf("t",8));
// // case sensative search()
// // search() => searches string and return the position of the value
// // const myBioData = 'I am the web booster';
// // let sData = myBioData.search("Web"); // no .search("web"),2
// // console.log(sData);

// // Extracting string parts
// /*
// 1. slice
// 2. substring
// 3. substr
// */
// //slice()method
// // returns sliced part in new arr;
// // should have start position, or may or may not need end position

// // var str = "Apple, Banana, Kiwi, mango";
// // let res =str.slice(0,4);
// // let res = str.slice(7, -2); // Banana, Kiwi, man
// // let res = str.slice(7); //Banana, Kiwi, mango
// // console.log(res); // Appl
// // The original array won't be changed

// //Challenge time .....
// /*
// Q: Display only 280 characters of a string
//     like the one used in Twitter?
// */
// // let myTweets = `No, variables declared inside an if statement would not be accessible directly outside an if statement because if statements have their own scope. How might you set a value based on a conditional then? You can either use a ternary operator or declare the variable outside the if/else statement and define the variables value inside the if/else.
// // This does not work:`;

// // let myActualTweet = myTweets.slice(0,280); //0-279 index position
// // console.log(myActualTweet);
// // console.log(myActualTweet.length);

// //substring() method
// // cannot accepts -ve indexes
// // var str = "Apple, Banana, Kiwi";
// // // let res = str.substring(0,4);// Appl
// // let res = str.substring(8,-2)
// // console.log(res);
// // if we set -ve value the character is count from 0th index

// //The substr() method
// // second parameter is the lenght of the extracted path
// // let str   = "Apple, Banana, Kiwi";
// // // let res = str.substr(7,-2);
// // let res = str.substr(-10);
// // console.log(res);

// // Replacing string content
// //String.prototype.replace(searchFor, replaceWith)
// // let myBioData = `I am Ningsang Hang Jabegu Ningsang`;
// // let replaceData = myBioData.replace('Ningsang','ningsang');
// // console.log(replaceData); // by default replace first match and it is case sensitive
// // // returns same string if we try to replace the word that is not in the given string
// // console.log(myBioData);

// // Extracting string characters
// // 3 methods for extracting character
// /*
// 1. charAt()
// 2. charCodeAt()
// 3. Property Access
// */
// //charAt() method
// // let str = "HELLO WORLD";
// // console.log(str.charAt(0));

// //charCodeAt() method
// // let str = "HELLO WORLD";
// // console.log(str.charCodeAt(0));
// // returns between 0 and 65535 ie. unicode
// // unique number for every character

// // return unicode of last character
// // let str = "HELLO WORLD";
// // let lastChar = str.length-1;
// // console.log(str.charCodeAt(lastChar));

// // Property Access
// // ECMAScript 5 (2005) allows property access [] on strings
// //  var str = 'HELLO WORLD';
// //  console.log(str[0]);

// // other useful methods
// // var myName = "ningsang jabegu";
// // console.log(myName.toUpperCase());
// // console.log(myName.toLowerCase());

// // concat() methods

// // let fName = "Ningsang";
// // let lName = "Jabegu";
// // console.log(`${fName} ${lName}`);
// // console.log(fName.concat(lName));
// // console.log((fName.concat(" ",lName)));

// // String.trim() method
// // var str = "          Hello world!        ";
// // console.log(str.trim());

// // Converting a String to an Array

// // var txt = "a,b,c d,e"; ///string
// // console.log(txt.split(",")); // split on commas
// // console.log(txt.split(" ")); // split on spaces
// // console.log(txt.split("|")); // split on pipe

// // Section 8: Date & Time in Javascript
// //Date method()
// //Time method()

// // Creating Date objects (miliseconds since 1st january 1970 UTC)
// // There are four ways to create a new date object
// // new Date();
// // new Date(year, month, day, hours, minutes, seconds, milliseconds);

// // let currDate = new Date();
// // console.log(currDate);
// // GMT - Greenwitch Mean Time
// // console.log(new Date());

// // Local time
// // console.log(new Date().toLocaleString());
// // console.log(new Date().toString());

// // Date.now()
// // console.log(Date.now());// From 1st Jan 1970 milisecond

// // new Date(year, month, day, ..)
// // month argument is compulsary
// // January is 0. and December is 11 in JavaScript
// // var d = new Date(2023,11);
// // console.log(d.toLocaleString());

// // var d = new Date("October 13, 2014 11:13:00");
// // console.log(d.toLocaleString());

// // console.log(Date.now());
// // var d = new Date(1682683350198);
// // var d = new Date(0); // 1970-01-01 5:30:00
// // var d = new Date(56400000*2)
// // console.log(d.toLocaleString());

// // Dates Method
// // const curDate = new Date();

// // how to get the indivisual date
// // console.log(curDate.toLocaleString());
// // console.log(curDate.getFullYear()); // 2023
// // console.log(curDate.getMonth()); // 3 (0-11) =>jan to dec
// // console.log(curDate.getDate()); // date
// // console.log(curDate.getDay()); // day (0-6) => sum to sat

// // How to set the individual date
// // var curDate = new Date();
// // console.log(curDate.setFullYear(2022));
// // // The setFullYear() method can optionally set month and day
// // console.log(curDate.setFullYear(2022, 10, 5));
// // console.log(curDate.setMonth(10)); // 0-11 jan to dec
// // console.log(curDate.setDate(5));
// // console.log(curDate.toLocaleString());

// // Time Methods
// // const curTime = new Date();
// // // how to get the indivisual Time
// // console.log(curTime.getTime());//in miliseconds
// // // number (0-23)
// // console.log(curTime.getHours());
// // console.log(curTime.getMinutes());
// // console.log(curTime.getSeconds());
// // console.log(curTime.getMilliseconds());

// // const curTime = new Date();
// // how to set the indivisual Time
// // console.log(curTime.setTime());//NaN
// // number (0-23)
// // console.log(curTime.setHours(5));
// // console.log(curTime.setMinutes(5));
// // console.log(curTime.setSeconds(5));
// // console.log(curTime.setMilliseconds(5));

// // challenge Time NOT yet decided
// // (function(){
// //     setInterval(()=> {
// //         console.log(new Date().toLocaleTimeString());
// //     },1000)
// // })();

// // Practice Time
// // new Date().toLocaleTimeString(); //only time
// // new Date().toLocaleDateString(); //only date
// // new Date().toLocaleString(); // both time and date

// // Section : Math Objects in JavaScript
// // console.log(Math.PI);//value of PI

// //Math.round()
// //returns the value of x rounded to its nearest integer
// // let num = 10.535;
// // console.log(Math.round(num));

// //Math.pow()
// // console.log(Math.pow(2,3));
// // console.log(2**3); //exponential operator

// //Math.sqrt()
// // console.log(Math.sqrt(25));
// // console.log(Math.sqrt(81));
// // console.log(Math.sqrt(0));

// //Math.abs() ==>>absolute value of (positive)
// // console.log(Math.abs(-55));
// // console.log(Math.abs(-55.32));
// // console.log(Math.abs(-995));
// // console.log(Math.abs(4-6));

// //Math.ceil() =>ceiling
// // console.log(Math.ceil(4.4));
// // console.log(Math.round(4.4));
// // console.log(Math.ceil(99.001));
// // console.log(Math.round(99.1));

// //Math.floor() =>floor
// // console.log(Math.floor(4.7));
// // console.log(Math.round(4.4));
// // console.log(Math.floor(99.001));
// // console.log(Math.round(99.1));

// ///Math.max()
// // console.log(Math.max(0, 150,30,20,-8,-200)); // maximum number
// // console.log(Math.min(0, 150,30,20,-8,-200)); // Minimum value

// ///Math.random() => gives random value
// // console.log(Math.random()); // gives number between 0-1
// // console.log(Math.random()*10); // gives number from 1-10
// // console.log(Math.floor(Math.random()*10)); gives random num

// ///Math.trunc() => truncket function
// // console.log(Math.trunc(4.6)); // gives 4
// // console.log(Math.trunc(-99.3)); // gives -99

// /// Section 10: DOM in JavaScript
// // Difference between window and document
// // window = parent; document = child;
// // window = complete screen (window object)
// // document = body (rendering html part)
// // no need to declear window object
// // but need to declear document object like 
// /// document.getElementById; document.
// // window has methods, properties, objects
// // document is the object of window and only works with html
// // Window -> DOM, BOM, JavaScript

// // DOM = Document Object Model (html related)
// // BOM = Browser Object Model (browser related)

// // innerHeight and innerWidth are the property of window

// // Practical on History objects => uses BOM

// // alert(`Hi you are currently at
// // ${location.href}`); // shows current url
// // if (confirm("Want to Visit Google?")) {
// //     location.href = "https://www.google.com.np"; // redirects the browser to a url

// // }

// /// DOM - document(root)
// //          <HTML>
// /*
//         <BODY> <HEAD>
//     <A>  <P>
// */

// // Section : 
// // in html
// // search and get reference

// // Interview Question
// // What is the different between getElementById and querySelector
// // .innerHtml will get the value of the element

// // section 11: Events in JavaScript
// // Events in JavaScript is done by Browser or by user
// // four ways of writing alert;
// /*f
// 1. using inline events alert();
// 2. By Calling a function 
// 3. using inline events (HTML onclick="" property and element.onclick)
// 4. Using Event Listeners (addEventListener and It's attachEvent)
// */
// /*
// fourWay.addEventListener("click", () => {
//     alert("Hi there this is click no. 3");
// })
// */
// // if we call same event using onclick then the approach is top to bottom (override)
// // if we use event listener we can call same events in multiple events

// // section 2: What is Event Object?
// // / Event object is the parent object of the event object
// // / const foruthWay = document.getElementById("fourtWay");
// // const checkEvent = () => {
// //     console.log(event);
// //     console.log(event.target); //returns element
// //     console.log(event.type); // click
// // }
// // fourthWay.addEventListener('click',checkEvent);
// // mouse event
// // onmousedown (pressing mouse)
// // onmouseup (realising mouse)
// // mouseenter (hoverin)
// // mouseleave (hoverout)

// // keyboard events (event.key), (event.code)
// // onkeypress
// // onkeydown
// // onekeyup

// // input events 
// // onchange()
// /*
// const selectElement = () => {
//     const inputChange = document.getElementById('ice').value;
//     const iceCreams = document.getElementById('iceCream').value;
//     const result = document.getElementById('result');
//     result.innerHTML = `Mr ${inputChange} select ${iceCreams}`;
//     console.log(`${inputChange} and ${iceCreams}`)
// }

// const iceCream = document.getElementById("iceCream");
// iceCream.addEventListener('change',()=> {

// });

// */
// // Interview Question
// // onclick (top to bottom approach and overrides)vs addEventListener (we can call anytime without overriding) 

// // Section 11 : Timing BAsed events

// // setTimeout(function, millisecond)
// // executes a function, after waiting a specidied number of milliseconds.
// // setInterval(function,millisecond)
// /*
// <div class="main-div">
//     <div>
//         <p>Want to know my Name</p>
//         <p id="showMyName"></p>
//         <br>
//         <button id="btn">Click here</button>
//         <button onclick="clearTimeout(myvar)">Stopit</button>
//     </div>
// </div>
// <script>
//     const myName = document.querySelector('#showMyName');
//     const btn = document.querySelector('#btn');
//     const showMyName = ()=>{
//         myName.innerHTML = `Loading..`;
//         setTimeOut(() => {
//             myName.innerHTML
//         }, 1000)
//     }
//     btn.addEventListener('clic', showMyName)
// </script>
// */

// /*
// <div class="main-div">
//     <div>
//         <p>Can you stop me when I reach at 5?</p>
//         <br>
//         <button id="btn">Click Here</button>
//     </div>
// </div>
// <script>
//     const stopNum = document.querySelector('p');
//     const btn = document.querySelector('#btn');

//     const showMyNum = () => {
//         stopNum.innerHTML = "Loading...";
//         setInterval(() => {
//             stopNum.innerHTML = `${num}`;
//             num++;
//         },1000)
//     }
//     stopInterval.addEventListener('click', () => {
//         clearInterval(showMyNum);
//     });
// </script>
// */

// // Interview Question
// // Difference between setTimeout and setInterval() ?

// // Section: 12 OOPs in JavaScript (Object Oriented JavaScript)
// /*
// Object Literals
// this object
// */

// // => Key:value pair data structure is object literals
// // object => school bag
// // arr used mostly for the same type of data
// // anything we can store in object?
// //1st way
// // let biodata = {
// //     myName : 'Ningsang',
// //     myAge : 21,
// //     getData : function() {
// //         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
// //     }
// // };
// // console.log(biodata.myName);
// // console.log(biodata.myAge);
// // biodata.getData();

// //2nd way (no need to write function as well afret es6)
// // let biodata = {
// //     myName : 'Ningsang',
// //     myAge : 21,
// //     getData() { // no need to write function
// //         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
// //     }
// // };
// // console.log(biodata.myName);
// // console.log(biodata.myAge);
// // biodata.getData();

// // What if we want object as a value inside an object
// // let biodata = {
// //     myName : {
// //         realName : "Ningsang",
// //         channelName : "World site"
// //     } ,
// //     myAge : 21,
// //     getData() { // no need to write function
// //         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
// //     }
// // };
// // console.log(biodata.myName.channelName);
// // biodata.getData()

// /// What is this object?
// // => 'this' object is that it contain the current context
// // => The 'this' object can have different values depending on where it is placed

// /// // For Example:
// // console.log(this); // in browser gives windows object
// // console.log(this.alert('Awesome')); // in browser alerts the box
// // // ex 2:
// // function myName() {
// //     console.log(this);
// // }
// // myName(); // current (context) object is windows only
// // // ex 3:
// // var myNames = 'Ningsang';
// // function myNameIs() {
// //     console.log(this.myNames);
// // }
// // myNameIs();

// // // ex 4:
// // const obj = {
// //     myAge : 21,
// //     myName() {
// //         console.log(`My age is ${this.myAge}`);
// //     }
// // }
// // obj.myName(); // 21

// // // ex 5: 
// // Interview Question
// ///// What is the value of the function
// // const obj = {
// //     myAge : 21,
// //     myName : () => {
// //         console.log(this);
// //     }
// // }
// // obj.myName(); // {} // Windows is the object when we use flat arrow
// // fat arrow function will not work when we use it in object

// // // Interview Question
// // let bioData = {
// //     myName : {
// //         relaName : 'Ningsang Jabegu',
// //         channelName : 'Hello World'
// //     },
// //     myAge : 21,
// //     getData(){
// //         console.log(`My name is ${this.myName.channelName}
// //         and my age is ${this.myAge}`);
// //     }
// // }
// // bioData.getData();

// // ECMAScript 2016/ES7
// /* Destructuring in ES6 */
// // Array Destructuring
// // const myBioData = ['Ningsang','Jabegu',21];
// // let myFName = myBioData[0];
// // let myLName = myBioData[1];
// // let myAge = myBioData[2];


// // => arr distructuring
// // let [myFName ,myLName, myAge] = myBioData;
// // console.log(myFName);
// // We can add values too

// // let [myFName ,myLName, myAge, myDegree="MCS"] = myBioData;
// // console.log(myDegree);

// // => Object destructuring
// // const myBioData = {
// //     myFname : 'Ningsang',
// //     myLname : 'Jabegu',
// //     age : 26
// // }
// // // let age = myBioData.age;
// // // console.log(age);

// // let {myFname ,myLname, myAge, myDegree="MCS"} = myBioData;
// // console.log(myDegree);

// //// Object Properties
// // let myName = "Ningsang";
// // const myBio = {
// //     [myName] : "hello how are you?", // adding dinamic data
// //     // 20+6 : "is my age", //gives tokan error in 
// //     // 26 : "is my age",
// //     [20+6] : "is my age" // with [] we can do arithmetic operation
// // }
// // console.log(myBio);

// // => no need to write key and value, if both are same
// // let myName = "Ningsang Jabegu";
// // let myAge = 21;
// // // const myBio = {
// // //     myName : myName,
// // //     myAge : myAge
// // // }
// // const myBio = {
// //     myName, // if key and value both are same then just we can
// //     myAge // write one
// // }
// // console.log(myBio);

// // Spread Operator
// // const colors = ['red','green','blue','white'];
// // const myColors =['red','green','blue','white','yellow','black'];

// // const MyFavColors  = [ ...myColors, 'yellow','black'];
// // console.log(MyFavColors);

// // ECMAScript 2016/ES7
// /*
// Array.prototype.includes
// Exponential Operator
// */

// // ES7 Features (2016)
// // 1: array include
// // const colors = ['red','green','blue','white'];
// // const isPresent = colors.includes('purple')
// // console.log(isPresent);

// //2: ** (exponentiation operator)
// // console.log(2**3);

// // ECMAScript2017 ES8
// // 1: await
// // 2: async
// // String.padding
// // Object.values()
// // Object.entries()

// // const message = "my name is Ningsang";
// // console.log(message);
// // console.log(message.padStart(5));
// // console.log(message.padEnd(10));
// // let myAge = "21".padEnd(10);
// // console.log(myAge);

// // const person = {name:'Fred', age:87};
// // // console.log(Object.values(person));
// // console.log(Object.entries(person));


// // ES2018
// // const person = {name:'Fred', age:87, degree:"BSc. CSIT"};
// // const sPerson = { ...person};
// // console.log(person);
// // console.log(sPerson);

// // const arr = [
// //     ['Zone_1', 'Zone_2'],
// //     ['Zone_3', 'Zone_4'],
// //     ['Zone_5', 'Zone_6'],
// //     ['Zone_7', ['Zone_7', ['Zone_7', 'Zone_8']]]];

// //previously
// // let FlatAff = arr.reduce((accum, curVal) => {
// //     return accum.concat(curVal);
// // });
// // console.log(FlatAff);

// //now
// // by default only flats into 1 level
// // console.log(arr.flat(Infinity));

// // // Object.fromEntries()
// // => has converted key and value both to arr like
// // [['name','fred],['age',87]] => Object to Array
// // now to make such array like above to the object 
// // || we use Object.fromEntries()

// // const person = {name: 'Fred', age:87};
// // const arrObj = Object.entries(person);
// // console.log(arrObj);
// // console.log(Object.fromEntries(arrObj));

// // // String.prototype.{trimStart,trimEnd}

// // // ES 2020
// // #1: BigInt
// // let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log(9007199254740991 + 100); // may give falsi result
// // console.log(9007199254740991n + 100n); 

// // const newNum = 9007199254740991n +12n;
// // console.log(newNum);
// // console.log(typeof(newNum));

// // nullish Coalescing
// // const foo = null ?? 'default string';
// // console.log(foo);


// //ES2014 => not working now
// // "use strict";
// // x = 3.14; 
// // console.log(x);

// // // Section 13: advance Javascript
// /*
// Event Propagation(Event Bubbling and Event Capturing)
// Higher Order Function
// Callback Function
// Function Currying (We will see after Async JS section)
// Call Back Hell
// AJAX call using XMLHttp request
// BONUS Section JSON
// Fetch API
// Promises
// Async-Await
// Error Handling in JS
// */

// // What is |Event Propagation
// // => The event propagation mode determines in which order the elements receive the event
// // top to bottom => capture phase (Event Capture) outermost first / trickling
// // bottom to top => Bubble phase (Event Bubbling) innermost first
// // Capture Phase, Target Phase, Bubble Phase
// // event.target
// // by default event bubbling is performed
// // event.stopPropagation(); // will stop happening propagation after that targeted div

// // for capturing ie. true in 3rd argument
// //childId.addEventListener('click', childCall, false) // bydefault is false i.e. Bubbling

// // What is higher order function

// // const add = (a,b) => {
// //     return a+b;
// // };
// // const subs = (a,b) => {
// //     return Math.abs(a-b);
// // }
// // const mul = (a,b) => {
// //     return a*b;
// // }

// // const calculator = (num1,num2,operator) => {
// //     return operator(num1,num2);
// // //  return add(5,2);
// // }
// /*
// Here in this case calculator is accepting another function as 
// an argument so it is called high ordered function 

// And the function that is passed as an argument in the high ordered
// function is called callback function
// */
// // console.log(calculator(5,2,add));
// // const div = (a,b) => {
// //     return
// // }

// // Section 13: How JavaScript works and Asynchronous Javascript
// // Asynchronous programming
// /*
// Hoisting in JavaScript
// Scope Chain
// Lexical Scoping in JavaScript
// Use Strict Mode
// This Keyword
// Closure in JavaScript
// What is Asynchronous JavaScript Programming?
// What is Event Loop?
// */

// // Hoisting in JavaScript
// // => declearation are moved to the top of their scope before the code execute
// // for example:
// // console.log(myName);
// // var myName;
// // myName = 'Jabegu';

// // How it will be in output during creation phase
// // variables and function to top
// /*
// 1: console.log(myName);

// 1: var myName;
// 2: console.log(myName);

// 1: var myName;
// 2: console.log(myName);
// 3: myName = 'Jabegu';
// */

// // What is Scope chain and lexical Scoping in JavaScript
// // const PI = 3.1415;

// // Lexical Scoping means Now, the inner function can get access to
// // their parent functions variables But the vice-versa is not true

// // for eg:
// let a = 'Hello guys. '; //globla scope
// const first = () => {
//     let b= "How are your? "
//     const second = () => {
//         let c= "Hi, I am fine thank you";
//         console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c) // c is not defined
// }
// first();

// What is closure in JavaScript
// => gives access to an outer function from an inner scope
// => It is created every time 
// const outerFun = (a) => {
//     let b=10;
//     const innerFun = () => {
//         let sum = a+b;
//         console.log(`The sum of the two number is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5); // This is happen due to closure or also called lexicol scoping

// it is same like lexical scoping 
// eg:
// const outerFun = (a) => {
//     let b=10;
//     const innerFun = () => {
//         let sum = a+b;
//         console.log(`The sum of the two number is ${sum}`);
//     }
//     return innerFun;
// }
// let checkClosure = outerFun(5);
// // checkClosure();
// console.dir(checkClosure);
// // go and check to browser

//
// "use strict" // 2014 ECMAScript
//  let x = "sum";
// console.log(x);

// 11: Interview Question
// Difference between synchronous and asynchronous prg
// if first work not completed, no next work is done is synchronous
// const fun2 = () => {
//     console.log("Function 2 is called");
// }
// const fun1 = () => {
//     console.log(`Function 1 is called`);// 1st work
//     fun2();// 2nd work
//     console.log(`Function 1 is called`);//3rd work
// }
// fun1()

// Asynchronous JavaScript Prog
// const fun2 = () => {
//     setTimeout(()=>{
//         console.log(`Function 2 is called`);
//     },2000)
// };
// const fun1 = () => {
//     console.log(`Function 1 is called`);// 1st work
//     fun2();// 2nd work
//     console.log(`Function 1 is called`);//3rd work
// }
// fun1()

// What is Event loop in JavaScript
// // 12: Interview Question
// const fun2 = () => {
//     setTimeout(()=>{
//         console.log(`Function 2 is called`);
//     },2000)
// };
// const fun1 = () => {
//     console.log(`Function 1 is called`);// 1st work
//     fun2();// 2nd work
//     console.log(`Function 1 is called`);//3rd work
// }
// fun1()
// when function 1 is called => Fun1() Execution context
// c.log()fun is execution context || after execution is over it's execution context is also over
// when function 2 is called => fun2() executioncontext
// setTime() Execution context and timer is set to 2000 ms callback()
//      now that 2000ms is sent to Web API and the setTime() execution context vanished
//      and search that is there any other function to do if not the Fun1() execution context is gone/over
// Now funct1() checks if there is anything left to execute then it will do the job else the context is gone/over

// After 2000ms the webApi sends the callback() function to the Message queue,
// Now the global context will see if there is anything left and it runs event loop and get executed in execution stack that is in message loop.
// Execution Stack => Web API => Message Queue =>Execution Stack

// What is function Currying
// Interview Quesiton : Output of sum(5)(3)(8)

// function sum(num1) {
//     // console.log(num1);
//     return function (num2) {
//         // console.log(num1,num2);
//         return function(num3) {
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(5)(3)(8);

const  sum = (num1) => (num2) => (num3) =>{console.log(num1+num2+num3);};
sum(5)(3)(8);
// This technique is function curring

// // CallBack Hell
// setTimeout(()=> {
//     console.log(`1 work is done`);
//     setTimeout(()=> {
//         console.log(`2 work is done`);
//         setTimeout(() => {
//             console.log(`3 work is done`);
//             setTimeout(() => {
//                 console.log(`4 work is done`);
//                 setTimeout(()=> {
//                     console.log(`5 work is done`);
//                     setTimeout(()=> {
//                         console.log(`6 work is done`);
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// AJAX call using XMLHttprequest
// API = Application Program Interface
/*
beforebegin
<p>
    afterbegin
    foo...
    beforeend
<p>
afterend
*/

// Bonus: JavaScript object notation (JSON)
// JSON.stringify turns a JavaScript object into JSON text and
// stores that JSON text in a string, eg:

var my_object = { key_1: "some text", key_2: true, key_3: 5};
var object_as_string = JSON.stringify(my_object); // Object to JSON
// "{"key_1":"some text","key_2":true,"key_3":5}"
console.log(typeof(object_as_string)); 
console.log(JSON.parse(object_as_string)); // JSON to object
// "string"
console.log(typeof(my_object));

// JSON is used to communicate between servers
// in past XML was used for same purpose
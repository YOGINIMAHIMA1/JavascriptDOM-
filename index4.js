// stack vs heap 
//primitive data stored in stack and refrence data stored in heap
const name='John'
const age=30
const person=
{
    name:'Jonathan',
    age:31
}
let newName=name;
console.log(name,newName);//John John
newName='Johnsonny'
console.log(name, newName);// John Johnsonny



//TYPE CONVERSION
let number= '100'
let convStore= parseInt(number)
console.log(convStore, typeof convStore);//100 number

//  convert string to float
let amount='99.5'
amount=parseFloat(amount);
console.log(amount, typeof amount)//   99.5  
  
//convert float to int
amount= parseInt(amount);
console.log( amount ,typeof amount);//   99   number

amount= Boolean(amount)
console.log(amount, typeof amount)// true boolean


amount='hello'
console.log(parseInt(amount));//NaN
typeof amount// 'number'


Math.sqrt(-11)//NaN
typeof Math.sqrt(-11)//'number'

console.log(1+NaN);//NaN
console.log(undefined + undefined);//NaN

let num12= 'foo' *3// NaN
typeof num12// 'number'

num12= 'lolo' +22// lolo22
typeof num12// 'string'

// operators
//arthemtic operators-- +,-,/,*,%
//concatenation
let x= 'Mahima'+ ' ' + 'Bhardwaj';
console.log(x);// Mahima Bhardwaj
// exponent
let power= 2 ** 4
console.log(power);
//increment
let x1 =2
x1++;//2
console.log(x);//3
++x1//4
//decrement
x1--// 4
console.log(x1);//3
--x1;// 2
console.log(--x1+x1++);//2
// assigment
let x22=4
x22**=2;//16// power operator
//Type coehersion- javascript internall changes the type
var num=12+'11';
console.log(num,typeof num);// 1211, string
//type conversion
let num2= 22
console.log(string(num2));//22
typeof num2// string
// CONVERT string into number
let x12=5 +'5'
x12= 5 + number('5')
console.log(x12);//10
typeof x12/// number
// strings
let y;
let name='Kiara'
let age= 21
y='Hello , my name is' + name + 'and I am' + age + 'years old';
console.log(y);//Hello , my name is John and I am  21 years old
let y1= `Hello , my name is ${name} and I am ${age} years old`
console.log(y1);
let s11='hello world'
// to create string into string object
  let x= new String('hello world')// string object
  typeof x//object
  // access value by key
  x= s11[1];//e
  x=s11.__proto__; // it will show all properties of string
  // properties and methods of string
  s11.toLowerCase();// hello world
  s11.toUpperCase();// HELLO WORLD
  s11.charAt(3);// l
  s11.indexOf('l');// 2
  s11.lastIndexOf('l')//9
  s11.substring(0,4);// hell
  s11.substring(4);//o world
  

// if statement
let soup="chicken noodle soup"
let reply;
if(soup)
{
    reply=`Here your order of ${soup}`;// 
}
else
{
    console.log('no soup');
}
console.log(reply);//Here your order of chicken noodle soup
//if else statement
let name1='John Hammond'
if(name1 ==='Raj Saxena')
{
    console.log(`My name is ${name1}`);
}
else
{
    console.log('this is not my name' );// this is not my name
}
let str= 'hello world'
str.slice(-10,-1)

str.substring(2,4)//ll
str.replace('w','H')// 'hello Horld'

//Create a var

let sum, difference, product, quotient, remainder;
let x= Math.floor(Math.random()*20+1)
let y= Math.floor(Math.random()*20+1)
sum= x+y
difference=x-y
product= x*y 
quotient=x/y 
remainder= x%y
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)
console.log(remainder)


str.includes('ello')//true
str.valueOf()//'hello Horld
str.replace('h', 'H')// Hello Horld
// caplitalize a single character in string
let str11= 'hello world'
// sol1 
let y12= str11.charAt(0).toUpperCase()+ str11.substring(1)// Hello world
//sol2
let z1= str11[0].toUpperCase()+ str11.substring(1);// Hello world
// sol 3
let p= `${str11[0].toUpperCase()}${str11.substring(1)}`// Hello world
// sol 4
let k= str11.replace('h','H')

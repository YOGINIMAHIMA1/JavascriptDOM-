const add=(a,b)=>a+b;
const square=(num)=> num*num;
console.log(square(add(2,3)))



/*const square1=(val)=>val*val
function composeTwoFunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b))
    }
}
*/
/*
const task= composeTwoFunction(add,square)
console.log( task(2,5))
*/



const multiply1 = (a, b) => a * b;
const add1 = (a, b) => a + b;

const c2f = (fn1, f2) => (a, b) => f2(a, fn1(a, b));

const task = c2f(multiply1, add1);
console.log(task(2, 7)); // Output: 16



function sum(a,b){
    return a+b
}
function sq(val){
    return val*val
}

function sumandSquare(a,b)
{
     return sq(sum(a,b)) 
}

console.log(sumandSquare(4,6))



const divide=(a,b)=> a/b ;
const multiplyy=(a,b)=>a*b


const divAndmultiply=(a,b)=> multiplyy(divide(a,b),3)
console.log(divAndmultiply(4,2))



function composeTwoFunction(fn1, fn2){
    return function (a,b){
        return fn2(fn1(a,b))
    }
}
  const cTwof=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b))

  const tsk= cTwof(multiplyy,divide)
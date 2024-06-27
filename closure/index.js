/*function outerFun(num){
     function innerFun(num1){
        return num+num1
     }
     return innerFun
}
const res= outerFun(11)
console.log(res(2))
*/


// HOF------- high order function
function square(a){
    return a*a;
}
function calcSquare(square,value){
    return square(value)
}
const num= calcSquare(square,20)
console.log(num)

const btn= document.getElementById('btn')
const closure=document.getElementById('closure')
function outerFun(size){
       function innerFun(){
   // closure.style.color='blue'
   closure.style.fontSize= `${size}px`
   
}
return innerFun;
}
 const size15=outerFun(15)
 const size30=outerFun(30)
 const size40=outerFun(40)
 const size60= outerFun(60)

 btn.addEventListener('click',size40)

 
function firstfunc(count){
    function secondfunc(){
       
       return count++
    }
   return secondfunc
}
var data= firstfunc(1)
data()




   
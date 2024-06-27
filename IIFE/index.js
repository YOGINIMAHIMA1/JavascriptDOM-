(function add(a,b){console.log(a+b)})(2,3);

(function print(){console.log("hello")})();

(()=>console.log('hii'))();

const divide =((a,b)=> a/b)(4,2);
console.log(divide);


const value=(()=>100)();
console.log(value)

//  Regular Function
function add(a,b){
    console.log(a+b)
}
add(2,3)


// Arrow function
const a=()=>{
    console.log(26)
}

// Regular IIFE
(function something(){
    console.log('something but nothing')
})();

//Anonymous IIFE
(function  Do(){
    console.log('Arrow IIFE')
})();

//arrow IIFE
(arrow=()=>{
    console.log('Arrow IIFE')
})();

let age=25;
arrow=(()=>{
    age=27;
    console.log(age+1);
})();


const val= ((a,b)=> a-b)(9,9);
console.log(val)
/*
const multiply =((a,b)=>{return a*b})
(3,2);
console.log(multiply);
*/
//atm
/*
const atm= function(startBal){
    let bal= startBal;
    function withdraw(amt){
        if(amt>bal){
            throw err;
        }
        else{
            bal-=amt;
            return bal;
        }
    }
    
    return {withdraw};

};
const  mahima= atm(2000)
console.log(mahima.withdraw(200))
*/


const x='xyz';
const hi=()=>"hii";
 (()=>{
    const x='lol';
    const hi=()=>"hello";
    console.log(x);
    console.log(hi());
})();


// Private variable and methods from closure
const increment=(()=>{
    let counter=0
    console.log(counter)
    const credits=(num)=>console.log(`I have ${num} credits `)
    return ()=> {++counter; credits(counter);}
})();
increment()

// Module Pattern
const Score =(()=>{
    let count=0
    return {
        current:()=>{return count},
        increment:()=>{count ++},
        reset:()=>{count=0}
    }
})();
Score.increment()
console.log(Score.current())
Score.increment()
console.log(Score.current())
Score.reset()
console.log(Score.current())
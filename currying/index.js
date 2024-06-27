// basic currying
const add=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
const res= add(2)(3)(5)
console.log(res)


const subtract=(a)=>{
    return(b)=>{
        return(c)=>{
            return a-b-c 
        }
    }
}
const sub= subtract(10)(8)(4)
console.log(sub)


/*function SendEmail(to){
            return function (subject){
                return function (body) {
                   console.log(`Sending Email to ${to}  with subject ${subject}: ${body}`)
                }
            }
}
let step1= SendEmail("xyz@gmail.com")
let step2=  step1("new order confirmation") 
step3= step2('hey xyz there is something for you')
*/

/*
function  Email(to){
    return function (subject){
        return function (body){
            console.log(` Sending email to ${to} with subject ${subject}:${body}`)
        }
    }
}


const step1= SendEmail
*/






function Sandwich(bread){
         return function(tomato){
            return function(onion){
                console.log(`It is made up of ${bread}  and ${tomato} and ${onion}`)

            }
         }
}

const SandwichPart1= Sandwich('bread')('tomato')('onion')
console.log(SandwichPart1)


function Poha(poha){
    return function Tomato(tomato){
     return function Onion(onion)
     {
        console.log(`clean  ${poha} in water  then boil it and add ${tomato} and add ${onion}`)
    }
}
}

const MakingPoha= Poha('poha')('tomato')('onion')
console.log(MakingPoha)






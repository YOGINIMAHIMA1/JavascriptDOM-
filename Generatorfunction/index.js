//Built-in iterator
for(const val of [1,2,3,4,5]){
    console.log(val)
} 
//YIELD 
function *create(){
    console.log('how')
    yield 'many';
    console.log('coding')
    yield 'community';
}
 const cr=create()
 /*console.log(cr.next().value)
 console.log(cr.next().value)*/

 for(let val of cr){
    console.log(val)
 }
 
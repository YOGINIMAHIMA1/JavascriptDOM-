document.title='promises'
//const fetchData= fetch('https://jsonplaceholder.typicode.com/posts/')
//console.log(fetchData)
let a=10;
let b=20;
let res=a+b ;
/*
async function fetchData()
{
   let resultfromServer=await fetch('https://jsonplaceholder.typicode.com/posts/')
   console.log(await resultfromServer.json())
}
*/
fetch('https://jsonplaceholder.typicode.com/posts/').then((data)=>
{
   console.log(data)
}).catch((err)=>
   {
    console.log(err)
   }).finally(()=>
{
  console.log('no error')
})
console.log(res)

//fetch()
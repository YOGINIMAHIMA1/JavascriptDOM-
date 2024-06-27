const input= document.getElementById('input')
const search= document.getElementById('search')
search.addEventListener('click',()=>
{
    const value= input.value
   localStorage.setItem('name',value)
   const h3= document.createElement('h3')
   h3.innerText= localStorage.getItem('name',value)
   document.body.appendChild(h3)
})


window.addEventListener('load',()=>{
    const p= document.createElement('p')
    localStorage.setItem('id',2)
    p.innerText=localStorage.getItem('id',2)
    document.body.appendChild(p)
})
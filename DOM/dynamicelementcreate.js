const btn= document.querySelector('#btn')
btn.addEventListener('click',()=>
{
  const head1=  document.createElement('h1')
    head1.setAttribute('id','heading')
    head1.innerHTML='this is heading'
    document.body.appendChild(head1)
    
})
  btn1.addEventListener('click',()=>
{
    const ul= document.createElement('ul')
    const li=document.createElement('li')
    ul.setAttribute('id','unordered')
    ul.appendChild(li)
    li.innerText='added unordered list'
    document.body.appendChild(ul)
})
let count=1
btn2.addEventListener('click',()=>
{
    const li= document.createElement('li')
    li.innerText=count;
    document.body.appendChild(li)
    count=count+2;
})
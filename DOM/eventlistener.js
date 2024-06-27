
function clickMe()
{
    document.write('btnnnn')
   
}
const btn= document.getElementById('btn')

btn.onclick=()=>document.write('clicked')

const btn1=document.getElementById('btn1')
btn1.addEventListener('click',()=>
{
    document.write('clickedbutton')
})

//red.addEventListener('click',()=>
//{
    const redcolor= document.getElementById('redcolor')
    //redcolor.style.color='red'
   // redcolor.style.backgroundColor='yellow'
   red.addEventListener('click',()=>{
   if(redcolor.style.color==='red'){redcolor.style.color='blue'
   }
   else{
    redcolor.style.color='red'
   }
})



//})
const body= document.querySelector('body')
body.addEventListener('click',()=>
{
    body.remove();
})
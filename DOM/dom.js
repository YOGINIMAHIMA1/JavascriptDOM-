alert('hi')
const dom=document.getElementById('dom')


dom.innerHTML=prompt('yellow','yeah')
console.log(document)
document.title='DOM'
console.log(document.title)
console.log(document.body)
document.write('lalhu')


// querySelector----- tags, id, class

/*const body= document.querySelector('body')
body.innerHTML= '<h1>bas kar yaar</h1>'
document.write(body.innerHTML)
console.log(body.innerText)*/
/*
const div= document.querySelector('div')
div.innerText='hahhhhhhh'

document.write(div.innerText)*/
   /*const hey= document.querySelector('#hey')
   hey.innerText='lalalala'
   document.write(hey.innerText)*/
   /*const mahima=document.querySelector('.mahima')
   mahima.innerText='wowowo'
   document.write(mahima.innerText)
*/
   //console.log(div.parentElement.children)

/*const el=document.querySelectorAll('.queryclass')
    el.forEach((e)=> {
    document.write(e.innerText);
   });
   */
  const el= document.getElementById('hey')
  el.innerText='lalala'
 
  
 // document.write(el.classList.add('pink','underline'))
  //el.classList.remove('underline')
  el.style.textdecoration=" underline"
  el.style.color='green'
  el.parentElement.style.background='yellow'
  el.parentElement.color='orange'
  //el.remove()
  
// write document in console you will get the html web page which you have open in we browser
typeof document
//'object'
document.querySelector('p')// it will return the top most paragraph
document.querySelectorAll('p')// it will return all paragraph
document.getElementById('h1');
document.getElementsByClassName('paragragh21');
// event handling 
const target= document.querySelector('body')
function onClick()
{
  console.log('click the body')
}
target.addEventListener('click', onClick) // no of times you click on web page it will count

function handleClick2()                // <h1 onclick="handleClick2()">Example Domain</h1>
{
  console.log('click the heading');
}

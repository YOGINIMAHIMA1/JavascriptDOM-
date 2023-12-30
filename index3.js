let answer =prompt('what is your name');
if(typeof(answer)=='string')
{
  var h1=document.createElement('h1')
  h1.innerText=answer;
  document.innerText='';
  document.body.appendChild(h1);
}

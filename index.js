var h2= document.createElement('h2');
//undefined
h2.innerText='heading 2';
//'heading 2'
console.log(h2);
//VM245:1 <h2>​heading 2​</h2>​
//undefined
h2.setAttribute('id','heading-2');
//undefined
h2.setAttribute('class','heading3');
//undefined
console.log(h3);
//VM590:1 Uncaught ReferenceError: h3 is not defined
  //  at <anonymous>:1:13
//(anonymous) @ VM590:1
h2.setAttribute('class','heading-3');
//undefined
console.log(h2);
//VM871:1 <h2 id=​"heading-2" class=​"heading-3">​heading 2​</h2>​
var h2= document.createElement('h2');
//undefined
h2.innerText='heading 2';
//'heading 2'
console.log(h2);
//VM245:1 <h2>​heading 2​</h2>​
//undefined
h2.setAttribute('id','heading-2');
//undefined
h2.setAttribute('class','heading3');
//undefined
console.log(h3);
//VM590:1 Uncaught ReferenceError: h3 is not defined
//    at <anonymous>:1:13
//(anonymous) @ VM590:1
h2.setAttribute('class','heading-3');
//undefined
console.log(h2);
//VM871:1 <h2 id=​"heading-2" class=​"heading-3">​heading 2​</h2>​
//undefined
document.body.appendChild(h2);

// string all properties
var name1= "NetworkChunk"
console.log(name1.charAt(6));
console.log(name1.indexOf('ork'));
console.log(lastIndexOf('hun'));
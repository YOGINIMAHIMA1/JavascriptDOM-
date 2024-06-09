const eles= document.getElementsByClassName('cls')
    eles.innerText='express js only'
    document.write(eles.innerText)
    console.log(eles)
  /*  Array.from(eles).forEach(e => {
        console.log(e);
         e.style.color="yellow"
         e.style.backgroundColor="skyblue"
    });
   */


    for(var i=0;i<eles.length;i++)
        {
            eles[i].style.color="yellow"
             eles[i].style.backgroundColor="black"

        }
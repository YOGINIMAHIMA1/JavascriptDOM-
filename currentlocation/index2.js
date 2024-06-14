const input= document.getElementById('input')
const search=document.getElementById('search')  
async  function getData (cityName){
    const promise=  await fetch(`http://api.weatherapi.com/v1/current.json?key=da2b63a758864e3dbc5180535241106&q=${cityName}&aqi=yes`)

     return  await promise.json()
}

    search.addEventListener('click', async()=>{
    const value= input.value;
    const data=   await getData(value)
    console.log(data)
})

const curr= document.getElementById('curr')
function success(position){
    console.log(position)
  }
  function fail(){
      console.log('fail')
  }
curr.addEventListener('click',()=>{
         navigator.geolocation.getCurrentPosition(success,fail)
})

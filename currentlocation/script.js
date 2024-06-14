const Location = document.getElementById('Location')
async function getData(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=da2b63a758864e3dbc5180535241106&q=${lat},${long}&aqi=yes`)
 
    return await promise.json();
 }
     async function  getLocation(position){
      const result=await getData(
        position.coords.latitude,
        position.coords.longitude
      )
      console.log(result)
}
function failedTogetLocation(){
   console.log('some issue')
}
Location.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition((getLocation,failedTogetLocation))
})
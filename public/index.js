const title = document.getElementById("title")
const submitBtn = document.getElementById('submit-btn')
const input = document.getElementById('input')
const summary = document.getElementById('summary')
const temperature = document.getElementById('temperature')
const place = document.getElementById('place')




// async function Boss (){
    
submitBtn.addEventListener('click', async(e)=>{
  e.preventDefault()
summary.textContent = "Loading..."
    temperature.textContent =""
    let response = await fetch(`/weather?location=${input.value}`)
    let data = await response.json()
    console.log(data.weatherData.time)
    
    place.textContent = data.placeData
    summary.textContent =  data.weatherData.summary
    temperature.textContent =  `${Math.floor((data.weatherData.temperature-32)*(5/9))}°C` 
  console.log('hello')

})



// submitBtn.addEventListener('click', async ()=>{
  
//  Boss();
// })

// input.addEventListener('keypress', async  (event)=>{
//     if (event.keyCode === 13){
//  Boss();
// } } )
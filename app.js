const body = document.querySelector("#one")
const city = document.querySelector("#city");
  const btnn = document.querySelector("#submit")
  let deg = document.querySelector(".temprature-degree")
  let desc = document.querySelector(".temprature-description")
  let na = document.querySelector(".name")
// search.addEventListener('click' , console.log(city.value));
 btnn.addEventListener('click' , function(){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=df8805b218019cc28ee719f8c0d9667e`
 
    fetch(api)
    .then( response => response.json())
    .then(data => {const  degg = data['main']['temp'] ;
                    const dessc =data['weather'][0]['description'];
                  const  naa = data['name']
                  
                
                 deg.innerText= Math.round(degg-273.15)
                 desc.innerText= dessc
                  na.innerText= naa
                  })
                })

                var today = new Date();
                const currenttime=today.getHours()
                // const currenttime=18
                if(currenttime>=6 && currenttime<18){
                  console.log('Morning')
                  body.style.backgroundColor="yellow"
                  // document.body.style.backgroundColor = "red";

                }else if(currenttime>=18 && currenttime<=19){
                  console.log("eve")
                  body.style.backgroundColor="#8f8b66"

                }else{
                  console.log("night")
                  body.style.backgroundColor="black"


                }







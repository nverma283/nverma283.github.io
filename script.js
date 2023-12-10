const url = 'https://api.openweathermap.org/data/2.5/weather?q=';


const getWeather = (city)=>{

cityName.innerHTML = city


fetch(url+city+"&appid=8d54e909ab39a0659a9f9e445a305c59")
    .then(response=>response.json())
    .then((response)=>  {
		
		
		
		console.log(response)
		const i=0

		document.getElementById("T_cloudpct"+i).innerHTML = response.clouds.all
		document.getElementById("T_temp"+i).innerHTML =  response.main.temp.toFixed(0) -273

		document.getElementById("T_feelslike"+i).innerHTML =  response.main.feels_like.toFixed(0) -273

		document.getElementById("T_humidity"+i).innerHTML = response.main.humidity 
		document.getElementById("humidity").innerHTML=response.main.humidity 
		document.getElementById("T_mintemp"+i).innerHTML =  response.main.temp_min.toFixed(0)-273
		document.getElementById("T_maxtemp"+i).innerHTML=  response.main.temp_max.toFixed(0)-273

		document.getElementById("T_windspeed"+i).innerHTML =  response.wind.speed
		document.getElementById("T_windeg"+i).innerHTML =  response.wind.deg
		windspeed.innerHTML=response.wind.speed
		temp.innerHTML=response.main.temp.toFixed(0)-273
        let rise = new Date(response.sys.sunrise*1000);
		document.getElementById("T_sunrise"+i).innerHTML =  rise.getHours()+":"+rise.getMinutes()
		let set = new Date(response.sys.sunset*1000);
		document.getElementById("T_sunset"+i).innerHTML =  set.getHours()+":"+set.getMinutes()



	
	})
    .catch(err=>console.log(err));
}	
getWeather("Delhi") //search ka default city set karne ke liye
submit.addEventListener("click",(e)=>{
e.preventDefault() 

	getWeather(city.value)
})






//table me values laane ke liye calls


for (let i=1; i<=5;i++)
{   
    fetch(url+document.getElementById("city"+i).innerText+"&appid=8d54e909ab39a0659a9f9e445a305c59")
    .then(response=>response.json())
    .then((response)=>  {
        
		console.log(response)

        console.log("T_cloudpct"+i);

		document.getElementById("T_cloudpct"+i).innerHTML = response.clouds.all
		document.getElementById("T_temp"+i).innerHTML =  response.main.temp.toFixed(0) -273

		document.getElementById("T_feelslike"+i).innerHTML =  response.main.feels_like.toFixed(0) -273

		document.getElementById("T_humidity"+i).innerHTML = response.main.humidity 
		document.getElementById("T_mintemp"+i).innerHTML =  response.main.temp_min.toFixed(0)-273
		document.getElementById("T_maxtemp"+i).innerHTML=  response.main.temp_max.toFixed(0)-273

		document.getElementById("T_windspeed"+i).innerHTML =  response.wind.speed
		document.getElementById("T_windeg"+i).innerHTML =  response.wind.deg
        let rise = new Date(response.sys.sunrise*1000);
		document.getElementById("T_sunrise"+i).innerHTML =  rise.getHours()+":"+rise.getMinutes()
		let set = new Date(response.sys.sunset*1000);
		document.getElementById("T_sunset"+i).innerHTML =  set.getHours()+":"+set.getMinutes()



	
    }).catch(err=>console.log(err));
	
}









const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1fec71c7emsh5b1161db46e6b2dp1a5e10jsn9d44fae020e9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const  getWeather=(city)=>{

city_name.innerHTML=city

     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
    
        cloud_pct.innerHTML=response.cloud_pct
        feels_like.innerHTML=response.feels_like
        max_temp.innerHTML=response.max_temp
        humidity.innerHTML=response.humidity
        sunrise.innerHTML=response.sunrise
        min_temp.innerHTML=response.min_temp
        sunset.innerHTML=response.sunset
        //let temp=document.getElementById('temp');
        temp.innerHTML=response.temp
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed


     } )
     .catch(err => console.error(err));
	
}

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{

    e.preventDefault();
    getWeather(city.value);
});

//getWeather('seattle');
//https://www.linkedin.com/in/yash-nikam-3404bb223
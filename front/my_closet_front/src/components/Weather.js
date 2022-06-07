import { useState, useEffect } from "react";

function Weather()  {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  const API_KEY = '58118cea642c613ed398cc1bfa3454cb'
  function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
  }
  function handleGeoError(error){
    alert('geo error : ', error);
  }
  function getCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setTemp(data.main.temp);
      setWeather(data.weather[0].main);
      setIcon(data.weather[0].icon);
    })
  }
  useEffect(() => {
    getCoords();
  },)
  return(
    <div style={{display:'block',
     margin:'0px, auto',
      textAlign:'center',
      marginBottom:'20px'}}>
      <img alt={'아이콘'} src={`http://openweathermap.org/img/wn/${icon}.png`} 
      style={{
        width:'100px',
        height:'100px'
      }}/>
      <p style={{display:'inline'}}><b>temp : {temp}˚C</b></p>
      <p style={{display:'inline'}}>   <b>weather : {weather}</b></p>
    </div>
  );
}

export default Weather;
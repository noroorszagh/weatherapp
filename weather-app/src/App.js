import { useState } from "react";

import "./App.css";
import { motion } from "framer-motion";

// This should already be declared in your API file



const App = () => {
 
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})



  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=97d93152ba45d6ccf02fe6861a6c2f9e`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery("");
        console.log(result)
      } )
    }
  }

  //const searchLocation = (event) => {
    //if (event.keyCode === 13) {
      //axios.get(url).then((response) => {
        //setData(response.data)
        //console.log(response.data)
      //});
      
    //}
  //};

  let className = 'card hide';
  if (weather.main) {
    className += 'card';
  }
  
  let imgUrl = ""
  if (weather.main && weather.weather[0].icon){
    imgUrl += `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }
  

  
  return (
    <div className="container">
      <div className="search">
        <motion.input
          type="text"
          value={query}  
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
          placeholder="Search"
          
        />
      </div>
    
      <motion.div className={className} >
        <div className="section_1">
          <motion.h1 animate={{fontSize :50}}>
            {weather.main ?  <h1>{weather.name +", "+ weather.sys.country}</h1> : null }
          </motion.h1>

          <div className="temp">
            {weather.main ? <h2>{weather.main.temp.toFixed()}℃</h2> : null}
          </div>

          <div className="weather_info">
            {weather.main ? <h3>{weather.weather[0].description}</h3> : null }
          </div>
        </div>

        <div className="section_2">
          <div className="oblaky">
            <img src={imgUrl} alt="" />
          </div>

          <div className="feels_like">
            {weather.main ? <h2>Feel temperature: {weather.main.feels_like.toFixed()}℃</h2> : null}
          </div>

          <div className="wind_speed">
            {weather.main ? <h2>Wind speed: {weather.wind.speed} m/s</h2> : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;

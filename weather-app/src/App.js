import { useState } from "react";
import axios from "axios";
import "./App.css";
import { motion } from "framer-motion";


const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      });
      
    }
  };

  let className = 'card hide';
  if (data.main) {
    className += 'card';
  }
  

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=97d93152ba45d6ccf02fe6861a6c2f9e`;
  return (
    <div className="container">
      <div className="search">
        <motion.input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Search"
          initial={{x: "-100vw"}}
          animate={{x: 0}}
          transition={{type: "spring", stiffness: 120}}
        />
      </div>

      <motion.div className={className} 
          animate={{x: 0}}
          transition={{type: "spring", stiffness: 120}}>
        <div className="section_1">
          <motion.h1 animate={{fontSize :50}}>
            
            {data.main ?  <h1>{data.name}, {data.sys.country}</h1> : null }
          </motion.h1>

          <div className="temp">
            {data.main ? <h2>{data.main.temp.toFixed()}℃</h2> : null}
          </div>

          <div className="weather_info">
            {data.main ? <h2>{data.weather[0].description}</h2> : null }
          </div>
        </div>

        <div className="section_2">
          <div className="feels_like">
            {data.main ? <h2>Feel temperature: {data.main.feels_like.toFixed()}℃</h2> : null}
          </div>

          <div className="wind_speed">
            {data.main ? <h2>Wind speed: {data.wind.speed}m/s</h2> : null}
          </div>

          <div className="oblaky">
          {data.clouds ? data.clouds.all > 50 ? <svg xmlns="http://www.w3.org/2000/svg" width="82" height="60" viewBox="0 0 82 60" fill="none">
          <path d="M62.8231 22.75H58.2425C56.8824 17.4974 54.072 12.7305 50.1307 8.99093C46.1894 5.25141 41.2752 2.68922 35.9465 1.5955C30.6178 0.501784 25.0882 0.920396 19.9862 2.80377C14.8842 4.68715 10.4142 7.95976 7.08425 12.2498C3.75429 16.5398 1.69785 21.6751 1.1486 27.0723C0.59936 32.4695 1.57934 37.912 3.97718 42.7816C6.37502 47.6512 10.0946 51.7524 14.7132 54.6194C19.3318 57.4864 24.6643 59.004 30.1047 59H62.8231C67.6439 59 72.2673 57.0904 75.6761 53.6913C79.0849 50.2922 81 45.682 81 40.875C81 36.0679 79.0849 31.4578 75.6761 28.0587C72.2673 24.6596 67.6439 22.75 62.8231 22.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          : <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
          <path d="M42.5001 60.2084C52.2801 60.2084 60.2084 52.2801 60.2084 42.5C60.2084 32.72 52.2801 24.7917 42.5001 24.7917C32.72 24.7917 24.7917 32.72 24.7917 42.5C24.7917 52.2801 32.72 60.2084 42.5001 60.2084Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42.5 3.54169V10.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42.5 74.375V81.4583" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9458 14.9459L19.975 19.975" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M65.0249 65.025L70.0541 70.0542" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.54175 42.5H10.6251" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M74.375 42.5H81.4583" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9458 70.0542L19.975 65.025" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M65.0249 19.975L70.0541 14.9459" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          : null }
        </div>
        </div>
        
      
      

      

        
      </motion.div>

    
    </div>
  );
};

export default App;

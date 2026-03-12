import { useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.jsx"; 
import WeatherForecast from "./WeatherForecast.jsx";     


export default function Weather() {
const [city, setCity] = useState("Johannesburg");
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);


      
  

  function handleResponse(response) {
    setWeatherData({
    temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      coordinates: response.data.coordinates,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      
    });
    setLoaded(true);
  }
function search(city) {
const apiKey="4o3f7f642638142f8fcf994tc99ba709";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
}
function handleSubmit(event) {
  event.preventDefault();
  search(city);
}
function handleCityChange(event) {
  setCity(event.target.value);
}

   if (loaded){return (
        <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a city..."
            className="text-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="search" className="send" />
        </form>
                <h4>{weatherData.city}</h4>
        <div>
        <FormattedDate date={weatherData.date} />
            </div>
            <ul>
            <li className="text-capitalize">{weatherData.description}</li>
            </ul>

        <img src={weatherData.icon} alt="weather-icon" />
        <span className="current">{Math.round(weatherData.temperature)} <span className="unit-1">°C|{""}</span>
        {Math.round((weatherData.temperature * 9) / 5 + 32)} <span className="unit-1">°F</span>
        </span>
            <div className="row">
            <div className="col-6">
            <ul>
                
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/hr</li>
            </ul>
                </div>
            </div>
            <WeatherForecast icon={weatherData.icon} coordinates={weatherData.coordinates} city={weatherData.city} />
        </div>
        
    );
}
else {
    search(city);
    return "Loading...";
}
    
}

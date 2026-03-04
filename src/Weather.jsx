import { useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.jsx";      


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
        
        <p>
        <FormattedDate date={weatherData.date} />
            </p>
        <img src={weatherData.icon} alt="weather-icon" />
        <span>{Math.round(weatherData.temperature)}</span>°C
            <div className="row">
                <div className="col-6">
            <ul>
        
            <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            </div>
            <div className="col-6">
            <ul>
                
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/hr</li>
            </ul>
                </div>
            </div>
            <div className="forecast">
            <h4>Hourly Forecast</h4>
            <div className="row">
                <div className="col-2">
                    <p>20:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 12</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                    <p>21:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 11</div> <div className="unit">°C</div>   
                    </div>
                <div className="col-2">
                    <p>22:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                    <p>22:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                    <p>23:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 9</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                    <p>23:00</p>
                    <div className="icon">🌧</div>
                    <div className="temperature"> 9</div> <div className="unit">°C</div>
                </div>
        </div>
        <h4>7-Day Forecast</h4>
        <div className="row">
            <div className="col-2">
                <p>Today</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
            <div className="col-2">
                <p>Fri</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 12</div> <div className="unit">°C</div>
            </div>
            <div className="col-2">
                <p>Sat</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 11</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                <p>Sun</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                <p>Mon</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                <p>Tue</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
                <div className="col-2">
                <p>Wed</p>
                <div className="icon">🌧</div>
                <div className="temperature"> 10</div> <div className="unit">°C</div>
                </div>
        </div>
                
            </div>
        
        </div>
    );
    }
else {
    search(city);
    return "Loading...";
}
}

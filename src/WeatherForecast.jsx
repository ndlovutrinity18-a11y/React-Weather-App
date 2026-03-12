import React, {useState, useEffect, use} from "react";
import axios from "axios";
import  Weather from "./Weather.jsx";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let[loaded, setLoaded]=useState(false);
    let[forecastData, setForecastData]=useState(null);
useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);


    function handleResponse(response) {
console.log(response.data);
setForecastData(response.data.daily);
setLoaded(true);
    }
    function maxTemp(index) {
        let temperature=forecastData[index].temperature.maximum;
        return `${Math.round(temperature)}°`;
    }
    function minTemp(index) {
        let temperature=forecastData[index].temperature.minimum;
        return `${Math.round(temperature)}°`;
    } 
    function formatDay(timestamp) {
    let date= new Date(timestamp * 1000);
    let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
    } 
   if (loaded) {
    console.log(forecastData);
    return (
        <div className="WeatherForecast">
        <h3 className="forecast-title">7-Day Forecast</h3> 
            <div className="row">
                <div className="col-2">
                    <div className="day">Today</div>
                    <img width="40" src={forecastData[0].condition.icon_url} alt="weather-icon" />
                    <br />
                    
                        <span className="max-temp">{maxTemp(0)}</span><span className="min-temp">{minTemp(0)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[1].time)}</div>
                    <img width="40" src={forecastData[1].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(1)}</span><span className="min-temp">{minTemp(1)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[2].time)}</div>
                    <img width="40" src={forecastData[2].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(2)}</span><span className="min-temp">{minTemp(2)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[3].time)}</div>
                    <img width="40" src={forecastData[3].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(3)}</span><span className="min-temp">{minTemp(3)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[4].time)}</div>
                    <img width="40" src={forecastData[4].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(4)}</span><span className="min-temp">{minTemp(4)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[5].time)}</div>
                    <img width="40" src={forecastData[5].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(5)}</span><span className="min-temp">{minTemp(5)}</span>
                </div>
                <div className="col-2">
                    <div className="day">{formatDay(forecastData[6].time)}</div>
                    <img width="40" src={forecastData[6].condition.icon_url} alt="weather-icon" />
                    <br />
                    <span className="max-temp">{maxTemp(6)}</span><span className="min-temp">{minTemp(6)}</span>
                </div>
            </div>
            <footer>
                This project was coded by <a href="https://stalwart-frangollo-13a334.netlify.app/" target="_blank" rel="noreferrer noopener"> Trinity Ndlovu </a> 
                and <a href="https://github.com/ndlovutrinity18-a11y/React-Weather-App" target="_blank" rel="noreferrer noopener"> is open-sourced on GitHub </a> and 
                hosted on <a href="https://teereact-weather-app.netlify.app/" target="_blank" rel="noreferrer noopener"> Netlify</a>.
            </footer>
        </div>
    );

 } else{
    let apikey="4o3f7f642638142f8fcf994tc99ba709"
    let longitude=props.coordinates.longitude;
    let latitude=props.coordinates.latitude;
    let apiurl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
return null;
 }
}

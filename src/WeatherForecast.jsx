import React from "react";
import axios from "axios";
import  Weather from "./Weather.jsx";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
        <h3 className="forecast-title">7-Day Forecast</h3> 
            <div className="row">
                <div className="col-2">
                    <div className="day">Sat</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    
                        <span className="max-temp"> 15°</span><span className="min-temp"> 10°</span>
                </div>
                <div className="col-2">
                    <div className="day">Sun</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 17°</span><span className="min-temp"> 12°</span>
                </div>
                <div className="col-2">
                    <div className="day">Mon</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 16°</span><span className="min-temp"> 11°</span>
                </div>
                <div className="col-2">
                    <div className="day">Tue</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 18°</span><span className="min-temp"> 13°</span>
                </div>
                <div className="col-2">
                    <div className="day">Wed</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 19°</span><span className="min-temp"> 14°</span>
                </div>
                <div className="col-2">
                    <div className="day">Thu</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 20°</span><span className="min-temp"> 15°</span>
                </div>
                <div className="col-2">
                    <div className="day">Fri</div>
                    <img width="40" src={props.icon} alt="weather-icon" />
                    <br />
                    <span className="max-temp"> 21°</span><span className="min-temp"> 16°</span>
                </div>
            </div>
        </div>
    );
}
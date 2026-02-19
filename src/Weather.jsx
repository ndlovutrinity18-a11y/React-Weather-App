import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="weather">
            <form>
                <input type="text" placeholder="Type a city..." className="text-input" />
                <input type="submit" value="search" className="send" />
        
            </form>
            <h4>
                Cape Town <br />
                🌧 12°C
            </h4>
            <div className="row">
                <div className="col-6">
            <ul>
            <li>
                Tuesday 20:00, light rain
            </li>
            <li>
                Humidity:20%, Wind 30km/h
            </li>
            </ul>
            </div>
            <div className="col-6">
            <ul>
                <li>Precipitation: 10%</li>
                <li>Humidity: 60%</li>
                <li>Wind: 30km/h</li>
            </ul>
                </div>
            </div>
            <h4>Hourly Forecast</h4>
            <div className="row">
                <div className="col-2">
                    <p>20:00<br />🌧 12°C</p>
                </div>
                <div className="col-2">
                    <p>21:00<br />🌧 11°C</p>
                    </div>
                <div className="col-2">
                    <p>22:00<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                    <p>22:00<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                    <p>22:00<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                    <p>22:00<br />🌧 10°C</p>
                </div>
        </div>
        <h4>7-Day Forecast</h4>
        <div className="row">
            <div className="col-2">
                <p>Today<br />🌧 10°C</p>
                </div>
            <div className="col-2">
                <p>Fri<br />🌧 12°C</p>
            </div>
            <div className="col-2">
                <p>Sat<br />🌧 11°C</p>
                </div>
                <div className="col-2">
                <p>Sun<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                <p>Mon<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                <p>Tue<br />🌧 10°C</p>
                </div>
                <div className="col-2">
                <p>Wed<br />🌧 10°C</p>
                </div>
                
            </div>
        </div>
    );
}
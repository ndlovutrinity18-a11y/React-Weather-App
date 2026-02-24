import React from "react";
import "./Weather.css";

export default function Weather() {
    return (

        <div className="weather">
            <form>
                <input type="text" placeholder="Type a city..." className="text-input" autoFocus />
                <input type="submit" value="search" className="send" />
        
            </form>
            <h4>
                Cape Town 
                </h4>
                <span>🌧 12</span>°C
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
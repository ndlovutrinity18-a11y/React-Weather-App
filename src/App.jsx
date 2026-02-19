import { useState } from 'react'
import './App.css'
import axios from "axios"
import Weather from './Weather.jsx'

export default function App() {
  return(
    <div className="form">
      <div className="container">
      <Weather/>
       <footer>
                This project was coded by <a href="https://stalwart-frangollo-13a334.netlify.app/" target="_blank" rel="noreferrer noopener"> Trinity Ndlovu </a> 
                and <a href="https://github.com/ndlovutrinity18-a11y/React-Weather-App" target="_blank" rel="noreferrer noopener"> is open-sourced on GitHub </a> and 
                hosted on <a href="https://teereact-weather-app.netlify.app/" target="_blank" rel="noreferrer noopener"> Netlify</a>.
            </footer>
    </div>
    </div>
  );
  
}

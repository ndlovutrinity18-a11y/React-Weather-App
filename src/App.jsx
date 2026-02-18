import { useState } from 'react'
import './App.css'
import axios from "axios"
export default function App() {
  return(
    <div className="form">
      <h1>Weather App</h1>
    <form>
    <input type="text" placeholder="Type a city..." className="text-input" />
    <input type="submit" value="search" className="send" />
    </form>
    </div>
  );
  
}

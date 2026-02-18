import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  function fetchData(response) {
    alert(`Weather in ${response.data.city} is ${response.data.temperature} degrees`)
  }
  let apikey= "4o3f7f642638142f8fcf994tc99ba709"
  let apiurl=`https://api.shecodes.io/weather/v1/current?query=London&key=${apikey}`
axios.get(apiurl).then(fetchData)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          TRINITY'S FIRST REACT APP, Very proud of myself for getting this far, can't wait to learn more and build amazing things with React!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

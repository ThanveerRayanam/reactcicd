import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="logos">
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <h2>Hi This is Rayanam</h2>
      <h2>Version 2 of my project</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs small">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
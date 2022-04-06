import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Places from './components/Places'

function App() {
  return (
    <div className="App">
      <div>
        <h2>Travel Blog</h2>
        <div className="places">
          <Places />
        </div>
      </div>
    </div>
  )
}

export default App

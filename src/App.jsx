import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import './index.css'
import Navigation from './navigation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navigation />

    </div>
  )
}

export default App

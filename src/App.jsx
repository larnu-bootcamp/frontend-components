import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Notification />
    </div>
  )
}

export default App

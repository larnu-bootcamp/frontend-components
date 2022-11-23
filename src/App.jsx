import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Notification from './components/Notification/Notification'
import Navbar from './components/Navbar/Navbar'
import Notification_1 from './Pages/Page_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Notification_1 />
    </div>
  )
}

export default App

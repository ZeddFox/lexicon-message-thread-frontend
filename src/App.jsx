import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router';
import { Session } from './pages/session.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Session/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

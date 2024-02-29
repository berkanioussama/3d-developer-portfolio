import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/projects' element={<div>Projects</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Projects from './pages/projects'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

import { Component, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>Home</Route>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='/contact' element={<Contact />}>Contact</Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

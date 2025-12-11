import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Componentes/Home'

function App() {
  
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

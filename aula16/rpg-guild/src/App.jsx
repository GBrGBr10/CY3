import { useState } from 'react'
import './App.css'
import Navbar from './Componentes/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Guilds from './Componentes/Guilds'
import Home from './Componentes/Home'
import Members from './Componentes/Member'
import GuildForm from './Componentes/GuildForm'
import MemberForm from './Componentes/MemberForm'

function App() {

  return (
    <div>
      <Router>
        <div className='app-container'>
          <Navbar />
          <Routes>
              <Route path = '/' element={ <Home /> } />
              <Route path = '/guilds' element={ <Guilds />} />
              <Route path = '/member' element={ <Members />} />
              <Route path = '/guilds/:guildId' element={ <GuildForm /> } />
              <Route path = '/member/:memberId' element={ <MemberForm /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

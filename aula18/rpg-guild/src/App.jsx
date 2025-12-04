import { useState } from 'react'
import './App.css';
import Navbar from './Componentes/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Guilds from './Componentes/Guilds';
import Members from './Componentes/Members';
import GuildForm from './Componentes/GuildForm';
import MemberForm from './Componentes/MemberForm';

function App() {
  
  return (
    <div className='app-container'>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/guildas' element={ <Guilds /> }/>
            <Route path='/membros' element={ <Members /> }/>
            <Route path='/guildas/:guildId' element={ <GuildForm /> }/>
            <Route path='/membros/:memberId' element={ <MemberForm /> }/>

          </Routes>
        </div>
      </Router>
    </div>
    
  )
}

export default App;

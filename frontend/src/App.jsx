import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import CreateItem from './pages/CreateItem.jsx'
import Edit from './pages/Edit.jsx'

import Navbar from './components/Navbar.jsx'

function App() {


  return (

    <>

      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Homepage/>} />
        <Route path = '/create' element = {<CreateItem/>} />
        <Route path = '/edit/:id' element = {<Edit/>} />   
      </Routes>

    </>
    
    
      
    
  )
}

export default App

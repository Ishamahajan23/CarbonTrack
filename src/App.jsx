import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route  } from 'react-router-dom'
import Form from './components/Form.jsx'
import IntensityDetails from './components/IntensityCard.jsx'
import HomePage from './pages/HomePage.jsx'
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/intensity/:date" element={<IntensityDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import { Router , Route , Routes } from 'react-router-dom'
import WeightGain from './Pages/WeightGain'
import WeightLoss from './Pages/WeightLoss'
import Exercise from './Pages/Exercise'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Weightgain' element={<WeightGain/>}/>
        <Route path='/Weightloss' element={<WeightLoss/>}/>
        <Route path='/Exercise' element={<Exercise/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App

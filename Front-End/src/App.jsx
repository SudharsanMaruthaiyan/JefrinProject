import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Achievement from './pages/Achievement'
import TeamSection from './pages/TeamSection'
import Workers from './pages/Workers'
import MyProfile from './pages/MyProfile'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/workers' element={<Workers/>} />
            <Route path='/workers:speciality' element={<Workers/>} />
            <Route path='/achievement' element={<Achievement/>} />
            <Route path='/contact' element={<TeamSection/>} />
            <Route path="/detail/:id" component={<ServiceDetails/>} />
            <Route path='/my-profile' element={<MyProfile/>}/>
            <Route path='/login' element={<Login/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogsHome from './pages/Blogs/BlogsHome'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="app bg-[#0F172A] h-screen text-[#F0F4F8]">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/BlogHome' element={<BlogsHome />} />
      </Routes>

    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Landing from '../pages/Landing'
import HowItWorks from '../pages/HowItWorks'
import Benefits from '../pages/Benefits'
import Pricing from '../pages/Pricing'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
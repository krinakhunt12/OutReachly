import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Landing from '../pages/Landing'
import HowItWorks from '../pages/HowItWorks'
import Benefits from '../pages/Benefits'
import Pricing from '../pages/Pricing'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import LeadSearch from '../pages/Leads/LeadSearch'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<LeadSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
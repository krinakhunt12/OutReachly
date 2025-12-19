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
import LeadConfirm from '../pages/Leads/LeadConfirm'
import EmailComposer from '../pages/Email/EmailComposer'
import OutreachStatus from '../pages/Email/OutreachStatus'

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
        <Route path="/leads/confirm" element={<LeadConfirm />} />
        <Route path="/email/compose" element={<EmailComposer />} />
        <Route path="/email/status" element={<OutreachStatus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt', { email })
    // TODO: call auth service
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <label className="block mb-3">
          <span className="text-sm text-gray-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 p-2 focus:outline-none"
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm text-gray-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 p-2 focus:outline-none"
          />
        </label>

        <button className="w-full bg-blue-600 py-2 rounded-md font-medium hover:bg-blue-500 transition">Sign in</button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <Link to="/register" className="text-blue-400">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login

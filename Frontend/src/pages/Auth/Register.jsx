import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Register attempt', { name, email })
    // TODO: call register API
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Create an account</h2>

        <label className="block mb-3">
          <span className="text-sm text-gray-300">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 p-2 focus:outline-none"
          />
        </label>

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

        <button className="w-full bg-white text-black py-2 rounded-md font-medium hover:bg-gray-200 transition">Create account</button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-400">Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default Register

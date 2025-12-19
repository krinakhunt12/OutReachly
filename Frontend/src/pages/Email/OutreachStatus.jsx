import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OutreachStatus() {
  const navigate = useNavigate()
  const [activity, setActivity] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('outreachActivity')
      const data = raw ? JSON.parse(raw) : []
      setActivity(data)
    } catch (e) {
      setActivity([])
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-start justify-center">
      <div className="w-full max-w-3xl">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Outreach status</h1>
          <p className="text-sm text-gray-300 mt-2">Your outreach activity will appear here after you send emails.</p>
        </header>

        {activity.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-300">Your outreach activity will appear here after you send emails.</div>
        ) : (
          <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
            {activity.map((a) => (
              <div key={a.id} className="flex items-center justify-between p-4">
                <div className="font-medium">{a.businessName}</div>
                <div className="text-sm text-gray-300">{a.status}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <button onClick={() => navigate('/dashboard')} className="px-4 py-2 bg-blue-600 rounded-md">Back to dashboard</button>
        </div>
      </div>
    </div>
  )
}

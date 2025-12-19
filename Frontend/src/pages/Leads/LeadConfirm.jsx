import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// LeadConfirm: confirmation screen before generating outreach emails.
// - Calm, dark single-column layout
// - List of selected leads with lightweight Remove option
// - Primary action: Generate Email (disabled when none selected)

export default function LeadConfirm() {
  const navigate = useNavigate()
  const [selectedLeads, setSelectedLeads] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('selectedLeads')
      const ids = raw ? JSON.parse(raw) : []
      // For demo we reconstruct from MOCK data in LeadSearch or assume id+name minimal shape
      // Here we map ids to a minimal object placeholder so user can review names.
      // In a real app, caller would pass full lead objects or the app would fetch them by id.
      const mocked = (window.__OUTREACHLY_MOCK_BUSINESSES || []).filter(b => ids.includes(b.id))
      // If mocked data isn't available, build simple entries
      const entries = mocked.length ? mocked : ids.map(id => ({ id, name: id, website: '', city: '', email: '' }))
      setSelectedLeads(entries)
    } catch (e) {
      setSelectedLeads([])
    }
  }, [])

  const handleRemove = (id) => {
    const next = selectedLeads.filter(s => s.id !== id)
    setSelectedLeads(next)
    try { localStorage.setItem('selectedLeads', JSON.stringify(next.map(x => x.id))) } catch (e) {}
  }

  const handleGenerate = () => {
    // Intent confirmation only — navigate to a compose/generation screen or show placeholder
    navigate('/email/compose')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
      <main className="w-full max-w-3xl">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Review selected businesses</h1>
          <p className="text-sm text-gray-300 mt-2">Make sure these are the right leads before generating outreach emails.</p>
        </header>

        <section className="space-y-4 mb-6">
          {selectedLeads.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-300">
              <p className="mb-3">No leads selected. Go back to search to select businesses.</p>
              <button onClick={() => navigate('/leads')} className="px-4 py-2 bg-blue-600 rounded-md">Back to search</button>
            </div>
          ) : (
            selectedLeads.map((s) => (
              <div key={s.id} className="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-medium text-white truncate">{s.name}</div>
                  <div className="text-sm text-gray-300 truncate">{s.website || ' '}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.city || ''}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.email || 'Email not found'}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => handleRemove(s.id)} className="text-sm text-gray-400 hover:text-white">Remove</button>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="pt-6 border-t border-gray-800 text-center">
          <div className="max-w-md mx-auto">
            <button
              onClick={handleGenerate}
              disabled={selectedLeads.length === 0}
              className={`w-full px-6 py-3 rounded-md font-semibold ${selectedLeads.length === 0 ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            >
              Generate Email
            </button>
            <p className="text-xs text-gray-400 mt-2">Emails will be generated for review before sending.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

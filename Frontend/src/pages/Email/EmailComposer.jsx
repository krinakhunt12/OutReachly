import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function generateSubject(b) {
  return `Quick question about ${b.name}`
}

function generateBody(b) {
  return `Hi ${b.name},\n\nI help local businesses in ${b.city} get more customers through simple, personalized outreach. Would you be open to a short, friendly email introducing your services?\n\nBest,\nYour Name`
}

export default function EmailComposer() {
  const navigate = useNavigate()
  const [selectedLeads, setSelectedLeads] = useState([])
  const [targetIndex, setTargetIndex] = useState(0)
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem('selectedLeads')
      const ids = raw ? JSON.parse(raw) : []
      const mocked = (window.__OUTREACHLY_MOCK_BUSINESSES || []).filter(b => ids.includes(b.id))
      const entries = mocked.length ? mocked : ids.map(id => ({ id, name: id, website: '', city: '', email: '' }))
      setSelectedLeads(entries)
    } catch (e) {
      setSelectedLeads([])
    }
  }, [])

  useEffect(() => {
    // initialize subject/body based on first target
    if (selectedLeads.length > 0) {
      const t = selectedLeads[targetIndex] || selectedLeads[0]
      setSubject(generateSubject(t))
      setBody(generateBody(t))
    }
  }, [selectedLeads, targetIndex])

  const selectedCount = selectedLeads.length

  const canSend = body.trim().length > 10 && selectedCount > 0

  const handleSend = () => {
    if (!canSend) return
    try {
      const raw = localStorage.getItem('selectedLeads')
      const ids = raw ? JSON.parse(raw) : []
      const mocked = (window.__OUTREACHLY_MOCK_BUSINESSES || []).filter(b => ids.includes(b.id))
      const recipients = mocked.length ? mocked : ids.map(id => ({ id, name: id, website: '', city: '', email: '' }))

      const activity = JSON.parse(localStorage.getItem('outreachActivity') || '[]')
      recipients.forEach((r) => {
        const personalizedSubject = subject.replace(/\{\{business\}\}/gi, r.name).replace(/\{\{city\}\}/gi, r.city)
        const personalizedBody = body.replace(/\{\{business\}\}/gi, r.name).replace(/\{\{city\}\}/gi, r.city)
        activity.push({ id: `${Date.now()}-${r.id}`, businessId: r.id, businessName: r.name, email: r.email || '', status: 'Sent', subject: personalizedSubject, body: personalizedBody })
      })
      localStorage.setItem('outreachActivity', JSON.stringify(activity))
    } catch (e) {}
    navigate('/email/status')
  }

  if (selectedCount === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <p className="text-gray-300 mb-4">No leads selected. Go back to search to select businesses.</p>
          <button onClick={() => navigate('/leads')} className="px-4 py-2 bg-blue-600 rounded-md">Back to search</button>
        </div>
      </div>
    )
  }

  const current = selectedLeads[targetIndex]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-start justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left context panel */}
        <aside className="col-span-1 bg-gray-800 rounded-lg p-6">
          <div className="text-sm text-gray-300 mb-4">Selected recipient</div>
          {selectedCount > 1 && (
            <select value={targetIndex} onChange={(e) => setTargetIndex(Number(e.target.value))} className="w-full mb-4 px-3 py-2 bg-gray-700 rounded-md border border-gray-700">
              {selectedLeads.map((s, i) => (
                <option key={s.id} value={i}>{s.name}</option>
              ))}
            </select>
          )}

          <div>
            <div className="font-medium text-white text-lg">{current.name}</div>
            <a className="text-sm text-gray-300 block truncate" href={`https://${current.website}`} target="_blank" rel="noreferrer">{current.website || '-'}</a>
            <div className="text-sm text-gray-400 mt-2">{current.city || ''}</div>
            <div className="text-sm text-gray-400 mt-2">{current.email || 'Email not found'}</div>
          </div>
        </aside>

        {/* Right editor */}
        <section className="col-span-1 lg:col-span-2 bg-gray-800 rounded-lg p-6 flex flex-col">
          <label className="text-xs text-gray-300 mb-2">Subject</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-700 mb-4" />

          <label className="text-xs text-gray-300 mb-2">Email</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={12} className="w-full p-3 rounded-md bg-gray-700 border border-gray-700 resize-y" />

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-400">Email will be sent only after you click Send Email.</p>
            <button onClick={handleSend} disabled={!canSend} className={`${!canSend ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'} px-5 py-2 rounded-md font-semibold`}>Send Email</button>
          </div>
        </section>
      </div>
    </div>
  )
}

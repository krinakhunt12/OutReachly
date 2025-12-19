import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LeadSearch() {
	const [query, setQuery] = useState('')
	const navigate = useNavigate()

	const handleFind = (e) => {
		e.preventDefault()
		console.log('Lead search:', query)
		// TODO: wire to real search - for now go to dashboard or show placeholder
		navigate('/dashboard')
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
			<div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow">
				<h2 className="text-xl font-semibold mb-2">Find local businesses</h2>
				<p className="text-sm text-gray-500 mb-6">Enter a city or category to start discovering leads.</p>

				<form onSubmit={handleFind} className="flex gap-3">
					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="e.g., coffee shop, Seattle"
						className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 focus:outline-none"
					/>
					<button className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium">Find</button>
				</form>

				<p className="text-xs text-gray-400 mt-4">This is a starter screen — results and personalization come next.</p>
			</div>
		</div>
	)
}

export default LeadSearch

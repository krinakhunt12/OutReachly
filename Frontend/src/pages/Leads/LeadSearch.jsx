import React, { useEffect, useMemo, useState } from 'react'

// LeadSearch: a fast, dark-themed, single-column lead selection screen.
// - Top sticky filter bar (category + city + Search)
// - Results as stacked rows with left checkbox selection
// - Loading / empty states
// - Selection is safe and reversible; no actions triggered on select

const MOCK_BUSINESSES = [
	{ id: 'b1', name: 'Green Bean Cafe', website: 'greenbeancafe.com', city: 'Seattle', email: 'hello@greenbeancafe.com' },
	{ id: 'b2', name: 'Oak Street Gym', website: 'oakstreetgym.com', city: 'Portland', email: '' },
	{ id: 'b3', name: 'Bella Salon', website: 'bellasalon.com', city: 'Seattle', email: 'contact@bellasalon.com' },
	{ id: 'b4', name: 'Fresh Cuts Barbers', website: 'freshcuts.example', city: 'Tacoma', email: '' },
	{ id: 'b5', name: 'Neighborhood Clinic', website: 'neighborhoodclinic.org', city: 'Seattle', email: 'info@neighborhoodclinic.org' },
]

function useFakeSearch(category, city) {
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useState([])

	useEffect(() => {
		// noop until search called
	}, [])

	const run = () => {
		setLoading(true)
		setResults([])
		setTimeout(() => {
			const filtered = MOCK_BUSINESSES.filter((b) => {
				const matchesCategory = !category || category === 'All' || b.name.toLowerCase().includes(category.toLowerCase()) || true
				const matchesCity = !city || b.city.toLowerCase().includes(city.toLowerCase())
				return matchesCategory && matchesCity
			})
			setResults(filtered)
			setLoading(false)
		}, 600)
	}

	return { loading, results, run }
}

export default function LeadSearch() {
	const [category, setCategory] = useState('')
	const [city, setCity] = useState('')
	const [selected, setSelected] = useState(() => new Set())

	const { loading, results, run } = useFakeSearch(category, city)

	const categories = useMemo(() => ['Restaurants', 'Gyms', 'Salons', 'Clinics', 'Cafes', 'Local Services'], [])

	const handleToggle = (id) => {
		setSelected((prev) => {
			const next = new Set(prev)
			if (next.has(id)) next.delete(id)
			else next.add(id)
			return next
		})
	}

	const selectedCount = selected.size

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8 px-4">
			<main className="w-full max-w-4xl">

				{/* Top Filter Bar - sticky */}
				<div className="sticky top-4 z-40 bg-gray-900/95 backdrop-blur-sm rounded-md px-4 py-3 mb-4 border border-gray-800">
					<div className="flex flex-col sm:flex-row gap-3 items-center">
						<div className="flex-1 flex gap-2">
							<div className="flex flex-col w-48">
								<label className="text-xs text-gray-400 mb-1">Business category</label>
								<select
									value={category}
									onChange={(e) => setCategory(e.target.value)}
									className="px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
								>
									<option value="">Select category</option>
									{categories.map((c) => (
										<option key={c} value={c}>{c}</option>
									))}
								</select>
							</div>

							<div className="flex-1">
								<label className="text-xs text-gray-400 mb-1">Location</label>
								<input
									value={city}
									onChange={(e) => setCity(e.target.value)}
									placeholder="Enter city"
									className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none"
								/>
							</div>
						</div>

						<div className="flex items-end gap-3">
							<div className="text-sm text-gray-300">{selectedCount > 0 ? `${selectedCount} selected` : ''}</div>
							<button
								onClick={() => run()}
								className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-semibold"
							>
								Search
							</button>
							<button
								onClick={() => {
									// Save selection (ids) and navigate to confirmation screen
									try { localStorage.setItem('selectedLeads', JSON.stringify(Array.from(selected))) } catch (e) {}
									window.location.href = '/leads/confirm'
								}}
								className={`px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 text-sm ${selectedCount === 0 ? 'opacity-60' : ''}`}
								title={selectedCount === 0 ? 'Select leads to review' : 'Review selected leads'}
							>
								Review selection
							</button>
						</div>
					</div>
				</div>

				{/* Results area */}
				<div className="space-y-3">
					{/* Empty before search */}
					{!loading && results.length === 0 && selectedCount === 0 && city === '' && category === '' && (
						<div className="text-center text-gray-400 py-12">Select a category and location to find local businesses.</div>
					)}

					{/* Loading */}
					{loading && (
						<div className="py-8 flex justify-center">
							<div className="w-8 h-8 border-4 border-gray-700 border-t-blue-600 rounded-full animate-spin" />
						</div>
					)}

					{/* No results message */}
					{!loading && results.length === 0 && (city !== '' || category !== '') && (
						<div className="text-center text-gray-400 py-12">No businesses found for this search. Try a different category or city.</div>
					)}

					{/* Results list */}
					{!loading && results.length > 0 && (
						<div className="bg-transparent rounded-md divide-y divide-gray-800">
							{results.map((b) => (
								<div key={b.id} className="flex items-center gap-4 py-4 px-3">
									<div className="flex-shrink-0">
										<input
											aria-label={`Select ${b.name}`}
											type="checkbox"
											checked={selected.has(b.id)}
											onChange={() => handleToggle(b.id)}
											className="w-5 h-5 rounded border-gray-600 bg-gray-800 checked:bg-blue-600 focus:ring-0"
										/>
									</div>

									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between gap-4">
											<div className="truncate">
												<div className="font-medium text-white truncate">{b.name}</div>
												<div className="text-sm text-gray-300 truncate">{b.website}</div>
											</div>
											<div className="text-sm text-gray-400">{b.city}</div>
										</div>

										<div className="mt-2 text-sm text-gray-400">{b.email ? b.email : 'Email not found'}</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</main>
		</div>
	)
}

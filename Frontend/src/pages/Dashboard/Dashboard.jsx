import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	const navigate = useNavigate()
	const emailsSentToday = 0
	const totalLeadsContacted = 0

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-4">
			<main className="w-full max-w-2xl">
				{/* Header */}
				<section className="mb-6 text-center">
					<p className="text-sm text-gray-300 mb-2">Welcome back 👋</p>
					<h1 className="text-3xl font-semibold">Ready to find new leads?</h1>
				</section>

				{/* Primary CTA Card */}
				<section className="mb-8">
					<div className="bg-gray-800 rounded-2xl shadow-md p-10 text-center">
						<h2 className="text-2xl font-bold mb-3">Find Local Businesses</h2>
						<p className="text-gray-300 mb-6">Discover nearby businesses and generate personalized outreach emails in minutes.</p>

						<button
							onClick={() => navigate('/leads')}
							className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-500 transition"
						>
							Start Finding Leads
						</button>

						<p className="text-sm text-gray-400 mt-3">Takes less than 2 minutes</p>
					</div>
				</section>

				{/* Guided Steps (non-clickable) */}
				<section className="mb-8">
					<div className="bg-transparent rounded-lg p-0 text-center">
						<div className="flex flex-col sm:flex-row items-stretch gap-4 justify-center">
							<div className="flex-1 bg-gray-800 rounded-lg p-4 text-left">
								<div className="text-sm text-gray-300">Step 1</div>
								<div className="font-semibold">Set search area</div>
								<div className="text-xs text-gray-400 mt-2">Pick a city or radius to find nearby businesses.</div>
							</div>

							<div className="flex-1 bg-gray-800 rounded-lg p-4 text-left">
								<div className="text-sm text-gray-300">Step 2</div>
								<div className="font-semibold">Personalize your message</div>
								<div className="text-xs text-gray-400 mt-2">Add a short template with a personal touch.</div>
							</div>

							<div className="flex-1 bg-gray-800 rounded-lg p-4 text-left">
								<div className="text-sm text-gray-300">Step 3</div>
								<div className="font-semibold">Send your first batch</div>
								<div className="text-xs text-gray-400 mt-2">Start small — send a handful of personalized emails.</div>
							</div>
						</div>
					</div>
				</section>

				{/* Onboarding checklist (non-interactive) */}
				<section className="mb-6">
					<div className="bg-gray-800 rounded-lg p-4">
						<div className="text-sm text-gray-300 mb-3">Quick checklist</div>
						<ul className="space-y-2 text-sm text-gray-300">
							<li className="flex items-start gap-3">
								<span className="w-4 h-4 mt-1 bg-gray-700 rounded-full" aria-hidden></span>
								<span>Choose location and business type</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="w-4 h-4 mt-1 bg-gray-700 rounded-full" aria-hidden></span>
								<span>Review and edit outreach template</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="w-4 h-4 mt-1 bg-gray-700 rounded-full" aria-hidden></span>
								<span>Send first 5 emails</span>
							</li>
						</ul>
					</div>
				</section>

				{/* Light status metrics */}
				<section className="mt-4 grid grid-cols-2 gap-4">
					<div className="bg-gray-800 rounded-lg p-4 text-center text-sm text-gray-300">
						<div className="text-xs text-gray-400">Emails sent today</div>
						<div className="text-2xl font-semibold mt-1">{emailsSentToday}</div>
					</div>

					<div className="bg-gray-800 rounded-lg p-4 text-center text-sm text-gray-300">
						<div className="text-xs text-gray-400">Total leads contacted</div>
						<div className="text-2xl font-semibold mt-1">{totalLeadsContacted}</div>
					</div>
				</section>

				{/* Recent activity (very light) */}
				<section className="mt-6 text-center text-sm text-gray-400">
					{emailsSentToday === 0 && totalLeadsContacted === 0 ? (
						<p>Your outreach activity will appear here once you start.</p>
					) : (
						<div className="space-y-2">
							<div>Sent 3 emails to local cafes — 2 replies</div>
							<div>Contacted 10 leads in Seattle</div>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}

export default Dashboard

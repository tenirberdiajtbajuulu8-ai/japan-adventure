import { useApp } from '../context/AppContext.jsx'

export default function BookingList() {
  const { bookings, removeBooking } = useApp()

  if (bookings.length === 0) return null

  return (
    <section className="bg-slate-100 py-16 px-6 sm:px-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center">Your bookings</h2>
        <p className="mt-2 text-center text-sm text-slate-500">Saved in your browser (localStorage).</p>

        <ul className="mt-8 space-y-4">
          {bookings.map((b) => (
            <li key={b.id} className="bg-white rounded-lg shadow-sm border-l-4 border-red-500 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">
                    {b.planName} · {b.travelers} {b.travelers === 1 ? 'traveler' : 'travelers'}
                  </p>
                  <p className="text-sm text-slate-500">
                    {b.name} · {b.email}
                  </p>
                  <p className="text-sm text-slate-500">Start: {b.date}</p>
                  {b.notes && <p className="text-sm text-slate-500 mt-1 italic">“{b.notes}”</p>}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xl font-bold text-slate-900">
                    ${b.total.toLocaleString('en-US')}
                  </p>
                  <button
                    onClick={() => removeBooking(b.id)}
                    className="mt-2 text-xs text-red-500 hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

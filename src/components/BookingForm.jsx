import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { PLANS } from '../data/plans.js'

const today = () => new Date().toISOString().split('T')[0]

export default function BookingForm() {
  const { selectedPlan, selectPlan, addBooking } = useApp()
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    travelers: 1,
    plan: selectedPlan || 'traveler',
    notes: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // если пользователь выбрал тариф кнопкой "Book Now" — подставляем его в форму
  useEffect(() => {
    if (selectedPlan) setForm((f) => ({ ...f, plan: selectedPlan }))
  }, [selectedPlan])

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setSuccess(false)
    if (field === 'plan') selectPlan(value)
  }

  function validate() {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.date) e.date = 'Choose a start date'
    else if (form.date < today()) e.date = 'Date cannot be in the past'
    const n = Number(form.travelers)
    if (!n || n < 1 || n > 20) e.travelers = 'From 1 to 20 travelers'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    const plan = PLANS.find((p) => p.id === form.plan)
    addBooking({
      name: form.name.trim(),
      email: form.email.trim(),
      date: form.date,
      travelers: Number(form.travelers),
      planId: plan.id,
      planName: plan.name,
      total: plan.price * Number(form.travelers),
      notes: form.notes.trim(),
    })
    setForm((f) => ({ ...f, name: '', email: '', date: '', travelers: 1, notes: '' }))
    setSuccess(true)
  }

  const input =
    'w-full border border-slate-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-8 text-left"
    >
      {success && (
        <div className="mb-6 rounded bg-emerald-100 text-emerald-700 px-4 py-3 text-sm font-medium">
          ✓ Your request was saved! Scroll down to see it in “Your bookings”.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
          <input id="name" className={input} value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" className={input} value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="plan">Plan</label>
          <select id="plan" className={input} value={form.plan} onChange={(e) => update('plan', e.target.value)}>
            {PLANS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — ${p.price.toLocaleString('en-US')}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="travelers">Travelers</label>
          <input id="travelers" type="number" min="1" max="20" className={input} value={form.travelers} onChange={(e) => update('travelers', e.target.value)} />
          {errors.travelers && <p className="text-xs text-red-500 mt-1">{errors.travelers}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1" htmlFor="date">Start date</label>
          <input id="date" type="date" min={today()} className={input} value={form.date} onChange={(e) => update('date', e.target.value)} />
          {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1" htmlFor="notes">Wishes (optional)</label>
          <textarea id="notes" rows="3" className={input} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Cherry blossoms, ramen tour, Ghibli museum…" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-green-500 hover:bg-green-600 transition text-white font-medium py-3 rounded"
      >
        Send request ✈️
      </button>
    </form>
  )
}

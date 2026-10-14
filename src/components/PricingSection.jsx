import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { PLANS } from '../data/plans.js'

// Аналог секции Pricing из видео: карточки с цветной шапкой и чёрной кнопкой.
// Выбранный тариф сохраняется в localStorage.
export default function PricingSection({ bg = 'bg-white' }) {
  const { selectedPlan, selectPlan } = useApp()
  const navigate = useNavigate()

  function handleSelect(id) {
    selectPlan(id)
    navigate('/tours#booking')
  }

  return (
    <section id="pricing" className={`${bg} py-20 px-6 sm:px-16 text-center scroll-mt-16`}>
      <h2 className="text-5xl font-extrabold text-slate-900">Tours</h2>
      <p className="mt-4 text-slate-500">Choose a tour plan that fits your adventure.</p>

      <div className="mt-14 grid sm:grid-cols-3 max-w-5xl mx-auto border border-slate-200 rounded shadow-sm overflow-hidden bg-white">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className="border-b sm:border-b-0 sm:border-r last:border-b-0 sm:last:border-r-0 border-slate-200"
          >
            <div className={`${plan.headerColor} text-white py-5 text-xl font-medium`}>
              {plan.name}
            </div>
            {plan.stats.map((s) => (
              <div key={s.text} className="py-4 border-b border-slate-100 text-sm">
                <strong className="text-slate-900">{s.bold}</strong>{' '}
                <span className="text-slate-600">{s.text}</span>
              </div>
            ))}
            <div className="py-6 text-3xl text-slate-400">
              $ <span className="text-slate-700">{plan.price.toLocaleString('en-US')}</span>
            </div>
            <div className="bg-slate-100 py-6">
              <button
                onClick={() => handleSelect(plan.id)}
                className="bg-black text-white text-sm px-6 py-2 rounded hover:bg-neutral-800 transition inline-flex items-center gap-2"
              >
                <span aria-hidden="true">✈️</span>
                {selectedPlan === plan.id ? 'Selected ✓' : 'Book Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-400">Prices per person, demo values.</p>
    </section>
  )
}

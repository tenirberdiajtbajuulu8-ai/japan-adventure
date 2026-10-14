import { Link } from 'react-router-dom'
import TravelCard from './TravelCard.jsx'

// Аналог секции "The App / Why buy it?" из видео
export default function WhyJapan() {
  return (
    <section className="bg-white py-20 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">The Journey</h2>
          <h3 className="text-2xl font-bold text-green-500 mt-1">Why Japan?</h3>
          <p className="mt-6 text-slate-600 leading-relaxed">
            <strong className="text-slate-900 text-lg font-medium">Adventure at every step.</strong>{' '}
            You should go to Japan because it is the only place where you can climb a sacred
            volcano in the morning, ride a 320 km/h bullet train at noon and eat the best ramen of
            your life in a neon alley at night. Every season brings a different country: cherry
            blossoms, green summers, red maples and powder snow.
          </p>
          <Link
            to="/tours"
            className="mt-6 inline-flex items-center gap-2 border border-slate-300 px-4 py-2 rounded hover:bg-slate-50 transition text-sm font-medium"
          >
            <span aria-hidden="true">✈️</span> Plan Your Trip
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            Explore:{' '}
            <Link to="/nature" className="hover:underline">🌸 Nature</Link>{' '}
            <Link to="/cities" className="hover:underline">🏯 Cities</Link>{' '}
            <Link to="/culture" className="hover:underline">🍵 Culture</Link>
          </p>
        </div>
        <TravelCard />
      </div>
    </section>
  )
}

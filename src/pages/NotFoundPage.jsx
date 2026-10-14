import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="py-32 px-6 text-center">
      <p className="text-7xl">🗾</p>
      <h1 className="mt-6 text-4xl font-extrabold text-slate-900">404 — Page not found</h1>
      <p className="mt-3 text-slate-500">Looks like you got lost on the way to Kyoto.</p>
      <Link
        to="/"
        className="mt-8 inline-block bg-green-500 hover:bg-green-600 transition text-white px-6 py-2.5 rounded"
      >
        Back to home
      </Link>
    </section>
  )
}

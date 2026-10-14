import { FEATURES } from '../data/features.js'

// Тёмно-серая секция с сеткой иконок — как "Features" в видео
export default function FeaturesSection() {
  return (
    <section id="features" className="bg-neutral-600 py-20 px-6 sm:px-16 text-center text-white scroll-mt-16">
      <h2 className="text-5xl font-extrabold">Highlights</h2>
      <p className="mt-4 text-white/80">Japan is just so full of wonders.</p>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-6 max-w-4xl mx-auto">
        {FEATURES.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-3">
            <span className="text-5xl" aria-hidden="true">{f.icon}</span>
            <span className="text-sm">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

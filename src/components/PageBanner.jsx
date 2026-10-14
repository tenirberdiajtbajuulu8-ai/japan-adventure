import ScenicBackground from './ScenicBackground.jsx'

// Шапка внутренних страниц (Nature, Cities, Culture, Tours, Favorites)
export default function PageBanner({ title, subtitle, emoji }) {
  return (
    <section className="relative overflow-hidden h-64 sm:h-72 flex items-center justify-center text-center text-white">
      <ScenicBackground className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-6">
        {emoji && <div className="text-5xl mb-2">{emoji}</div>}
        <h1 className="text-4xl sm:text-5xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-3 text-white/85 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}

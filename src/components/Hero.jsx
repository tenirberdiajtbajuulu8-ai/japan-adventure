import { Link } from 'react-router-dom'
import ScenicBackground from './ScenicBackground.jsx'
import Petals from './Petals.jsx'

// Как в видео: большой фон, тёмная полупрозрачная карточка слева
// с зелёной кнопкой и чёрная кнопка "Take Tour" справа сверху.
export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-4rem)] min-h-[560px]">
      <ScenicBackground className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <Petals />

      <a
        href="#features"
        className="absolute top-6 right-6 z-10 bg-black text-white text-sm px-4 py-2 rounded hover:bg-neutral-800 transition"
      >
        Take Tour &gt;
      </a>

      <div className="absolute z-10 left-6 sm:left-16 bottom-16 w-[calc(100%-3rem)] max-w-sm bg-black/60 backdrop-blur-sm text-white p-6 rounded-lg">
        <h1 className="text-2xl font-medium text-center">Discover Japan with us</h1>
        <hr className="border-white/30 my-4" />
        <p className="text-sm text-white/85 text-center mb-4">
          Mountains, temples, neon cities &amp; tea houses — your adventure starts here
        </p>
        <Link
          to="/nature"
          className="block w-full text-center bg-green-500 hover:bg-green-600 transition text-white font-medium py-2.5 rounded"
        >
          Start Exploring <span aria-hidden="true">🗻 ⛩️ 🌸</span>
        </Link>
      </div>
    </section>
  )
}

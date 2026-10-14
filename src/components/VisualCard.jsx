// Цветной блок с эмодзи — заменяет фотографию (аналог картинки в секции Clarity)
export default function VisualCard({ emoji, gradient = 'from-pink-300 to-rose-500', caption }) {
  return (
    <div
      className={`relative w-full max-w-sm h-80 mx-auto rounded-xl shadow-lg bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
    >
      <span className="text-8xl drop-shadow-lg">{emoji}</span>
      {caption && (
        <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {caption}
        </span>
      )}
    </div>
  )
}

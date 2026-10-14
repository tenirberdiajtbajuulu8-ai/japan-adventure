import VisualCard from './VisualCard.jsx'

// Секция "заголовок + цветной подзаголовок + текст" и картинка сбоку.
// Аналог секции "Clarity / Pixels, who?" из видео.
export default function HighlightSection({
  title,
  subtitle,
  subtitleColor = 'text-red-500',
  bg = 'bg-slate-100',
  emoji,
  gradient,
  caption,
  reverse = false,
  children,
}) {
  return (
    <section className={`${bg} py-20 px-6 sm:px-16`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={reverse ? 'md:order-2' : ''}>
          <VisualCard emoji={emoji} gradient={gradient} caption={caption} />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
          <h3 className={`text-2xl font-bold mt-1 ${subtitleColor}`}>{subtitle}</h3>
          <div className="mt-6 text-slate-600 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  )
}

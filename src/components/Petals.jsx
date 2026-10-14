// Падающие лепестки сакуры (чистый CSS, см. index.css)
const PETALS = [
  { left: '4%', size: 18, duration: 14, delay: 0 },
  { left: '11%', size: 14, duration: 18, delay: 3 },
  { left: '19%', size: 20, duration: 16, delay: 6 },
  { left: '27%', size: 12, duration: 20, delay: 1 },
  { left: '36%', size: 18, duration: 15, delay: 8 },
  { left: '44%', size: 14, duration: 19, delay: 4 },
  { left: '52%', size: 20, duration: 17, delay: 10 },
  { left: '60%', size: 12, duration: 21, delay: 2 },
  { left: '68%', size: 18, duration: 14, delay: 7 },
  { left: '76%', size: 14, duration: 18, delay: 5 },
  { left: '84%', size: 20, duration: 16, delay: 9 },
  { left: '92%', size: 12, duration: 20, delay: 11 },
]

export default function Petals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  )
}

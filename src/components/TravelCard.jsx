// "Планшет" справа от текста — как мини-превью сайта в видео
export default function TravelCard() {
  return (
    <div className="justify-self-center w-64 border-8 border-neutral-700 rounded-[2rem] overflow-hidden shadow-xl bg-white">
      <div className="h-44 bg-gradient-to-br from-sky-400 via-pink-300 to-rose-400 flex items-center justify-center text-7xl relative">
        🗻
        <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
          The Amazing Japan
        </span>
      </div>
      <div className="p-4">
        <p className="text-2xl font-bold text-slate-900 leading-tight">Japan</p>
        <p className="text-lg font-bold text-green-500 leading-tight">Why go?</p>
        <p className="mt-2 text-[10px] text-slate-500 leading-snug">
          That&apos;s easy. Ancient temples next to neon skyscrapers, bullet trains, hot springs and
          the friendliest people you will ever meet.
        </p>
      </div>
    </div>
  )
}

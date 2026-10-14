// Фото можно добавить в любое место: просто допишите поле image: '/images/fuji.jpg'
// (положите файл в папку public/images). Пока вместо фото — цветной градиент и эмодзи.

export const NATURE = [
  {
    id: 'fuji',
    category: 'nature',
    title: 'Mount Fuji',
    region: 'Honshu · Yamanashi / Shizuoka',
    emoji: '🗻',
    gradient: 'from-sky-400 to-indigo-700',
    season: 'Jul – Sep (climbing season)',
    description:
      "Japan's iconic 3,776 m volcano. Hike to the summit for sunrise or circle the Fuji Five Lakes for postcard views.",
  },
  {
    id: 'furano',
    category: 'nature',
    title: 'Furano & Biei',
    region: 'Hokkaido',
    emoji: '🌷',
    gradient: 'from-fuchsia-400 to-purple-600',
    season: 'Jul (lavender) · Jan–Feb (powder snow)',
    description:
      'Endless lavender and flower fields in summer, world-class powder snow in winter and rolling "patchwork" hills.',
  },
  {
    id: 'yakushima',
    category: 'nature',
    title: 'Yakushima Island',
    region: 'Kyushu · Kagoshima',
    emoji: '🌲',
    gradient: 'from-emerald-500 to-teal-800',
    season: 'Year-round (rainy, misty, magical)',
    description:
      'A UNESCO island of moss-covered ancient cedar forests — the landscape that inspired Princess Mononoke.',
  },
  {
    id: 'kamikochi',
    category: 'nature',
    title: 'Kamikochi Valley',
    region: 'Nagano · Japanese Alps',
    emoji: '🏞️',
    gradient: 'from-cyan-400 to-blue-700',
    season: 'Apr – Nov',
    description:
      'Crystal-clear Azusa River, snowy peaks and easy riverside trails in the heart of the Japanese Alps.',
  },
  {
    id: 'sakura',
    category: 'nature',
    title: 'Cherry Blossom Season',
    region: 'Nationwide',
    emoji: '🌸',
    gradient: 'from-pink-300 to-rose-500',
    season: 'Late Mar – Apr',
    description:
      'Hanami picnics under blooming sakura trees. The wave of blossoms travels from Kyushu all the way to Hokkaido.',
  },
  {
    id: 'momiji',
    category: 'nature',
    title: 'Autumn Leaves (Kōyō)',
    region: 'Kyoto · Nikko',
    emoji: '🍁',
    gradient: 'from-orange-400 to-red-600',
    season: 'Nov',
    description:
      'Temples and mountains painted in red and gold. Kyoto and Nikko are the most photogenic spots in November.',
  },
]

export const CITIES = [
  {
    id: 'tokyo',
    category: 'cities',
    title: 'Tokyo',
    region: 'Kanto',
    emoji: '🗼',
    gradient: 'from-rose-400 to-purple-700',
    season: 'Spring & Autumn',
    description:
      'Neon Shibuya crossing, quiet Senso-ji temple, Akihabara arcades and the world’s best sushi — all in one city.',
  },
  {
    id: 'kyoto',
    category: 'cities',
    title: 'Kyoto',
    region: 'Kansai',
    emoji: '⛩️',
    gradient: 'from-red-400 to-amber-600',
    season: 'Late Mar – Apr · Nov',
    description:
      'Thousands of vermilion gates at Fushimi Inari, golden Kinkaku-ji and geisha strolling through Gion.',
  },
  {
    id: 'osaka',
    category: 'cities',
    title: 'Osaka',
    region: 'Kansai',
    emoji: '🏯',
    gradient: 'from-amber-400 to-orange-600',
    season: 'Year-round',
    description:
      'Japan’s kitchen. Eat takoyaki and okonomiyaki along Dotonbori and visit the mighty Osaka Castle.',
  },
  {
    id: 'hiroshima',
    category: 'cities',
    title: 'Hiroshima & Miyajima',
    region: 'Chugoku',
    emoji: '🕊️',
    gradient: 'from-sky-300 to-blue-600',
    season: 'Spring & Autumn',
    description:
      'A moving Peace Memorial Park and the floating torii gate of Itsukushima Shrine on nearby Miyajima island.',
  },
  {
    id: 'nara',
    category: 'cities',
    title: 'Nara',
    region: 'Kansai',
    emoji: '🦌',
    gradient: 'from-lime-400 to-green-700',
    season: 'Year-round',
    description:
      'Friendly free-roaming deer and the giant bronze Buddha at Todai-ji, one of the largest wooden buildings on Earth.',
  },
  {
    id: 'sapporo',
    category: 'cities',
    title: 'Sapporo',
    region: 'Hokkaido',
    emoji: '❄️',
    gradient: 'from-blue-200 to-indigo-500',
    season: 'Feb (Snow Festival)',
    description:
      'Giant ice sculptures at the Snow Festival, miso ramen, fresh seafood and cold local beer.',
  },
]

export const CULTURE = [
  {
    id: 'tea',
    category: 'culture',
    title: 'Tea Ceremony',
    region: 'Kyoto · Uji',
    emoji: '🍵',
    gradient: 'from-green-400 to-emerald-700',
    season: 'Year-round',
    description:
      'Learn the quiet ritual of matcha: every movement has a meaning. Uji is the birthplace of Japan’s best green tea.',
  },
  {
    id: 'kabuki',
    category: 'culture',
    title: 'Kabuki & Noh Theatre',
    region: 'Tokyo · Kyoto',
    emoji: '🎭',
    gradient: 'from-red-500 to-rose-800',
    season: 'Year-round',
    description:
      'Dramatic make-up, bold costumes and centuries-old stories — a performance art unlike anything else.',
  },
  {
    id: 'matsuri',
    category: 'culture',
    title: 'Festivals (Matsuri)',
    region: 'Nationwide',
    emoji: '🎆',
    gradient: 'from-yellow-400 to-red-500',
    season: 'Summer',
    description:
      'Fireworks, portable shrines, yukata and street food. Gion Matsuri and Awa Odori are legendary.',
  },
  {
    id: 'onsen',
    category: 'culture',
    title: 'Onsen & Ryokan',
    region: 'Hakone · Beppu · Kusatsu',
    emoji: '♨️',
    gradient: 'from-orange-300 to-red-500',
    season: 'Best in winter',
    description:
      'Soak in natural hot springs, sleep on tatami and enjoy a multi-course kaiseki dinner in a traditional inn.',
  },
  {
    id: 'food',
    category: 'culture',
    title: 'Sushi, Ramen & More',
    region: 'Everywhere',
    emoji: '🍣',
    gradient: 'from-red-300 to-orange-500',
    season: 'Year-round',
    description:
      'From conveyor-belt sushi to Michelin-star counters: every region has its own ramen, sweets and sake.',
  },
  {
    id: 'anime',
    category: 'culture',
    title: 'Anime & Manga',
    region: 'Akihabara · Mitaka',
    emoji: '🎮',
    gradient: 'from-violet-400 to-fuchsia-600',
    season: 'Year-round',
    description:
      'Explore Akihabara, visit the Ghibli Museum and discover the pop culture that conquered the world.',
  },
]

export const ALL_DESTINATIONS = [...NATURE, ...CITIES, ...CULTURE]

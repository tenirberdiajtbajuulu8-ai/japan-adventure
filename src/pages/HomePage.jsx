import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import WhyJapan from '../components/WhyJapan.jsx'
import HighlightSection from '../components/HighlightSection.jsx'
import ExploreSection from '../components/ExploreSection.jsx'
import FeaturesSection from '../components/FeaturesSection.jsx'
import PricingSection from '../components/PricingSection.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyJapan />

      <HighlightSection
        title="Nature"
        subtitle="Seasons, who needs one?"
        subtitleColor="text-red-500"
        emoji="🌸"
        gradient="from-pink-300 to-rose-500"
        caption="Cherry blossoms, Kyoto"
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">Four seasons, four countries.</strong>{' '}
          Pink sakura in spring, lush green mountains in summer, fiery maples in autumn and silent
          snow villages in winter. From the sacred slopes of Mount Fuji to the mossy cedar forests
          of Yakushima, nature in Japan feels like a painting.
        </p>
        <Link
          to="/nature"
          className="mt-6 inline-block bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition"
        >
          Discover nature &rarr;
        </Link>
      </HighlightSection>

      <HighlightSection
        title="Cities"
        subtitle="Past meets future"
        subtitleColor="text-green-500"
        bg="bg-white"
        emoji="🏯"
        gradient="from-rose-400 to-purple-700"
        caption="Tokyo · Kyoto · Osaka"
        reverse
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">Neon lights and ancient gates.</strong>{' '}
          Tokyo never sleeps, Kyoto keeps every tradition alive, Osaka feeds you until you can&apos;t
          move. Trains run to the second — getting around is part of the fun.
        </p>
        <Link
          to="/cities"
          className="mt-6 inline-block bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition"
        >
          Explore cities &rarr;
        </Link>
      </HighlightSection>

      <HighlightSection
        title="Culture"
        subtitle="Tradition, alive"
        subtitleColor="text-red-500"
        emoji="🍵"
        gradient="from-green-400 to-emerald-700"
        caption="Tea ceremony, Uji"
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">Taste, touch and feel Japan.</strong>{' '}
          Join a tea ceremony, stay in a ryokan, watch a kabuki show, dance at a summer festival
          and discover why anime and manga are a way of life.
        </p>
        <Link
          to="/culture"
          className="mt-6 inline-block bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 transition"
        >
          Meet the culture &rarr;
        </Link>
      </HighlightSection>

      <ExploreSection />
      <FeaturesSection />
      <PricingSection bg="bg-white" />
    </>
  )
}

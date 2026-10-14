import PageBanner from '../components/PageBanner.jsx'
import HighlightSection from '../components/HighlightSection.jsx'
import DestinationGrid from '../components/DestinationGrid.jsx'
import PricingSection from '../components/PricingSection.jsx'
import { NATURE } from '../data/destinations.js'

export default function NaturePage() {
  return (
    <>
      <PageBanner
        emoji="🗻"
        title="Nature of Japan"
        subtitle="Volcanoes, forests, alpine valleys and cherry blossoms."
      />

      <HighlightSection
        title="Nature"
        subtitle="Wild & serene"
        subtitleColor="text-green-500"
        bg="bg-white"
        emoji="🌲"
        gradient="from-emerald-500 to-teal-800"
        caption="Yakushima forest"
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">70% of Japan is mountains.</strong>{' '}
          That means endless trails, hot springs hidden in the hills and views that change with every
          season. Pack comfortable shoes and a camera.
        </p>
      </HighlightSection>

      <DestinationGrid
        bg="bg-slate-100"
        title="Natural Wonders"
        subtitle="Save your favorites — they stay in your browser."
        items={NATURE}
      />
      <PricingSection />
    </>
  )
}

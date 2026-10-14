import PageBanner from '../components/PageBanner.jsx'
import HighlightSection from '../components/HighlightSection.jsx'
import DestinationGrid from '../components/DestinationGrid.jsx'
import PricingSection from '../components/PricingSection.jsx'
import { CITIES } from '../data/destinations.js'

export default function CitiesPage() {
  return (
    <>
      <PageBanner
        emoji="🏙️"
        title="Cities of Japan"
        subtitle="From neon-lit Tokyo to the temples of Kyoto."
      />

      <HighlightSection
        title="Cities"
        subtitle="Where to start?"
        subtitleColor="text-red-500"
        bg="bg-white"
        emoji="🚄"
        gradient="from-sky-400 to-indigo-700"
        caption="Shinkansen"
        reverse
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">Tokyo → Kyoto in 2h 15min.</strong>{' '}
          The bullet train connects the big cities so smoothly that you can see several of them in
          one trip. A Japan Rail Pass or an IC card makes it even easier.
        </p>
      </HighlightSection>

      <DestinationGrid
        bg="bg-slate-100"
        title="Must-See Cities"
        subtitle="Tap the heart to save a city to your list."
        items={CITIES}
      />
      <PricingSection />
    </>
  )
}

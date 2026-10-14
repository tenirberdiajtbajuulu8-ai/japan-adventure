import PageBanner from '../components/PageBanner.jsx'
import HighlightSection from '../components/HighlightSection.jsx'
import DestinationGrid from '../components/DestinationGrid.jsx'
import PricingSection from '../components/PricingSection.jsx'
import { CULTURE } from '../data/destinations.js'

export default function CulturePage() {
  return (
    <>
      <PageBanner
        emoji="🎎"
        title="Culture of Japan"
        subtitle="Tea, festivals, hot springs, food and pop culture."
      />

      <HighlightSection
        title="Culture"
        subtitle="Respect & omotenashi"
        subtitleColor="text-red-500"
        bg="bg-white"
        emoji="🎭"
        gradient="from-red-500 to-rose-800"
        caption="Kabuki theatre"
      >
        <p>
          <strong className="text-slate-900 text-lg font-medium">Hospitality without limits.</strong>{' '}
          Omotenashi is the art of anticipating your needs before you ask. Bow, take off your
          shoes, say “itadakimasu” before a meal — and you will be welcomed like family.
        </p>
      </HighlightSection>

      <DestinationGrid
        bg="bg-slate-100"
        title="Experiences"
        subtitle="Things you have to try at least once."
        items={CULTURE}
      />
      <PricingSection />
    </>
  )
}

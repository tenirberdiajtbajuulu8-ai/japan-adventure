import PageBanner from '../components/PageBanner.jsx'
import PricingSection from '../components/PricingSection.jsx'
import BookingForm from '../components/BookingForm.jsx'
import BookingList from '../components/BookingList.jsx'

export default function ToursPage() {
  return (
    <>
      <PageBanner
        emoji="✈️"
        title="Tours"
        subtitle="Pick a plan, choose your dates and we will prepare the adventure."
      />
      <PricingSection bg="bg-white" />

      <section id="booking" className="bg-neutral-600 py-20 px-6 sm:px-16 scroll-mt-16">
        <div className="text-center text-white mb-12">
          <h2 className="text-5xl font-extrabold">Book a Tour</h2>
          <p className="mt-4 text-white/80">Fill in the form — your request is saved in your browser.</p>
        </div>
        <BookingForm />
      </section>

      <BookingList />
    </>
  )
}

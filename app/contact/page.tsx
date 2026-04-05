import { ContactInfo } from '@/widgets/contact/ContactInfo'
import { ContactSection } from '@/widgets/contact/ContactSection'

export default function ContactPage() {
  return (
    <section className='space-y-10'>
      <ContactInfo />
      <ContactSection />
    </section>
  )
}

import { ContactForm } from './ContactForm'
import { HowWeWork } from './HowWeWork'

export const ContactSection = () => {
  return (
    <div className='grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
      <HowWeWork />
      <ContactForm />
    </div>
  )
}

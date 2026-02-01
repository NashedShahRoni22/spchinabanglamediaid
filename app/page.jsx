import Hero from './components/home/Hero'
import AboutSection from './components/home/AboutSection'
import ServicesSection from './components/home/ServicesSection'
import WhyChooseUs from './components/home/WhyChooseUs'
import TestimonialsSection from './components/home/TestimonialsSection'
import ContactSection from './components/home/ContactSection'
import AppointmentSection from './components/home/AppointmentSection'
import HospitalShowcase from './components/home/HospitalShowcase'
import CustomerReview from './components/home/CustomerReview'

export default function page() {
  return (
    <section>
      <Hero/>
      <ServicesSection/>
      <CustomerReview/>
      {/* <AppointmentSection/> */}
      <HospitalShowcase/>
      {/* <AboutSection/> */}
      <WhyChooseUs/>
      <TestimonialsSection/>
      {/* <ContactSection/> */}
    </section>
  )
}

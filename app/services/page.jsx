import AppointmentSection from "../components/home/AppointmentSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function page() {
  return (
    <div className="py-10">
      <ServicesSection />
      <AppointmentSection />
      <TestimonialsSection />
    </div>
  );
}

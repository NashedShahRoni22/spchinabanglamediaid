"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const services = [
  {
    title: "Medical Consultation & Treatment in China",
    description:
      "Access world-class medical care and treatment facilities in China with expert guidance.",
    icon: Stethoscope,
  },
  {
    title: "Patient Referrals & Hospital Appointments",
    description:
      "Seamless coordination of patient referrals and hospital appointments for specialized care.",
    icon: Activity,
  },
  {
    title: "Follow-up & Telemedicine Services",
    description:
      "Convenient remote consultations and continuous follow-up care from anywhere.",
    icon: HeartPulse,
  },
  {
    title: "Visa & Travel Assistance for Medical Purpose",
    description:
      "Complete support with visa processing and travel arrangements for medical treatment abroad.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Health Support in Bangladesh",
    description:
      "Ongoing healthcare assistance and support services for patients in Bangladesh.",
    icon: UserCheck,
  },
  {
    title: "Emergency Care",
    description:
      "24/7 urgent care and quick medical attention when you need it the most.",
    icon: Activity,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of healthcare and wellness services tailored
            to meet your needs — all delivered with care and professionalism.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

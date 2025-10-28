"use client";

import { motion } from "framer-motion";
import { Building2, Users, Workflow, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Trusted Collaboration with Hospital in China",
    description:
      "Partnered with leading medical institutions in China to provide world-class healthcare services and treatment options.",
    icon: Building2,
  },
  {
    title: "Experienced Medical Consultants in Dhaka",
    description:
      "Our team of expert consultants in Dhaka ensures you receive professional guidance and support throughout your healthcare journey.",
    icon: Users,
  },
  {
    title: "End-to-End Assistance",
    description:
      "Complete care from initial consultation through treatment to full recovery — we're with you every step of the way.",
    icon: Workflow,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Why <span className="text-[var(--color-primary)]">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing exceptional healthcare services that bridge 
            Bangladesh and China with expertise, trust, and comprehensive support.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-gray-700">Certified Professionals</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-gray-700">Affordable Care</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-gray-700">Expert Guidance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Award, Stethoscope, Users, Star, Globe, Heart, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const hospitalFeatures = [
  {
    icon: Award,
    title: "Provincial Level Excellence",
    description: "Premier Chinese Medicine hospital with cutting-edge traditional and modern treatments",
  },
  {
    icon: Stethoscope,
    title: "Specialized Departments",
    description: "Expert care in Traditional Chinese Medicine, Acupuncture, Orthopedics, and more",
  },
  {
    icon: Users,
    title: "World-Class Physicians",
    description: "Highly qualified doctors with decades of experience in Chinese and Western medicine",
  },
  {
    icon: Globe,
    title: "International Patient Care",
    description: "Dedicated services for international patients with translation and cultural support",
  },
];

const treatmentSpecialties = [
  "Traditional Chinese Medicine",
  "Acupuncture & Moxibustion",
  "Orthopedics & Bone Setting",
  "Internal Medicine",
  "Cardiology",
  "Oncology Treatment",
  "Rehabilitation Services",
  "Pain Management",
];

export default function HospitalShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#006943]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#006943]/10 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-[#006943]" />
            <span className="text-sm font-medium text-[#006943]">Our Trusted Partner Hospital</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            <span className="text-[#006943]">Yunnan Provincial Hospital</span>
            <br />
            <span className="text-gray-700">of Chinese Medicine</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Your gateway to world-renowned Chinese medicine and healthcare excellence. 
            We connect you with one of China's leading provincial hospitals.
          </p>
        </motion.div>

        {/* Main Hospital Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image Gallery */}
            <div className="relative h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006943]/90 to-red-600/90 mix-blend-multiply z-10" />
              <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Building2 className="w-12 h-12 text-[#006943]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Hospital Images</h3>
                  <p className="text-white/90 mb-6">
                    Modern facilities combining traditional Chinese medicine with contemporary healthcare
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>Provincial Level Excellence</span>
                  </div>
                </div>
              </div>
              {/* Placeholder for hospital images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-500 p-8">
                    <Building2 className="w-16 h-16 mx-auto mb-4 opacity-40" />
                    <p className="text-sm">Add hospital images here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hospital Info */}
            <div className="p-8 lg:p-12">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    No. 1, Huachen Road, Xishan District<br />
                    Kunming, Yunnan Province, China
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Established Provincial Level Hospital</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Integrates Traditional & Modern Medicine</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">International Patient Services Available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">State-of-the-art Medical Equipment</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#006943]/10 to-blue-500/10 rounded-2xl p-6 border border-[#006943]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-[#006943]" />
                  <h4 className="font-semibold text-gray-900">Why Choose This Hospital?</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yunnan Provincial Hospital of Chinese Medicine combines centuries-old traditional 
                  Chinese medical wisdom with modern diagnostic and treatment technologies, offering 
                  comprehensive healthcare solutions for international patients.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            What Makes This <span className="text-[#006943]">Partnership Special</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[#006943]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#006943]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Treatment Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Available <span className="text-[#006943]">Treatment Specialties</span>
            </h3>
            <p className="text-gray-600">
              Comprehensive medical services tailored to your health needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {treatmentSpecialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{specialty}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#006943] to-green-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Access World-Class Healthcare?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Let us help you connect with Yunnan Provincial Hospital of Chinese Medicine. 
            Our team handles everything from consultation to treatment and recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#006943] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Appointment Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+8801731106046"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us: +880 1731-106046
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
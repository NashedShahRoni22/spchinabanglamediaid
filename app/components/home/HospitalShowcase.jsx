"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Award, Stethoscope, Users, Star, Globe, Heart, CheckCircle, ArrowRight, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import hospitalImg1 from "../../assets/Hospital Image (1).jpg";
import hospitalImg2 from "../../assets/Hospital Image (2).jpg";

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
  const [activeImage, setActiveImage] = useState(0);
  const images = [hospitalImg1, hospitalImg2];

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#006943]/10 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#006943]" />
            <span className="text-sm font-medium text-[#006943]">Our Trusted Partner Hospital</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-[#006943]">Yunnan Provincial Hospital</span>
            <br />
            <span className="text-gray-700">of Chinese Medicine</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Your gateway to world-renowned Chinese medicine and healthcare excellence. 
            We connect you with one of China's leading provincial hospitals.
          </p>
        </motion.div>

        {/* Hero Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Large Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image
                src={images[activeImage]}
                alt="Yunnan Provincial Hospital"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Provincial Level Excellence</span>
                </div>
                <h3 className="text-2xl font-bold">Modern Healthcare Facility</h3>
                <p className="text-white/90 text-sm mt-1">Combining tradition with innovation</p>
              </div>
            </motion.div>

            {/* Right Side: Info Card + Thumbnail */}
            <div className="space-y-6">
              {/* Hospital Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full"
              >
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. 1, Huachen Road, Xishan District<br />
                      Kunming, Yunnan Province, China
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
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

                <div className="bg-gradient-to-br from-[#006943]/10 to-blue-500/10 rounded-2xl p-5 border border-[#006943]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-[#006943]" />
                    <h4 className="font-semibold text-gray-900">Why Choose This Hospital?</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Yunnan Provincial Hospital of Chinese Medicine combines centuries-old traditional 
                    Chinese medical wisdom with modern diagnostic and treatment technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center mt-6"
          >
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-20 w-32 rounded-xl overflow-hidden border-4 transition-all ${
                  activeImage === index 
                    ? 'border-[#006943] scale-110 shadow-lg' 
                    : 'border-white hover:border-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Hospital view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </motion.div>
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#006943]/20 to-[#006943]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#006943]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">{feature.title}</h4>
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
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Available <span className="text-[#006943]">Treatment Specialties</span>
            </h3>
            <p className="text-gray-600 text-lg">
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
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#006943]/30 transition-all"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{specialty}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Showcase with Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Image */}
          <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={hospitalImg1}
              alt="Hospital exterior view"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-medium">Exterior View</span>
              </div>
              <h4 className="text-xl font-bold">Modern Architecture</h4>
              <p className="text-white/90 text-sm mt-1">State-of-the-art medical facility</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={hospitalImg2}
              alt="Hospital facilities"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Stethoscope className="w-5 h-5" />
                <span className="text-sm font-medium">Interior View</span>
              </div>
              <h4 className="text-xl font-bold">Advanced Equipment</h4>
              <p className="text-white/90 text-sm mt-1">Latest medical technology</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#006943] to-green-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Start Your Healthcare Journey</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Access World-Class Healthcare?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Let us help you connect with Yunnan Provincial Hospital of Chinese Medicine. 
              Our team handles everything from consultation to treatment and recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+8801976260695"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us: +880 1976-260695
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
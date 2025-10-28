"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Globe, TrendingUp, Quote } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+", icon: Award },
  { label: "Patients Served", value: "5000+", icon: Users },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Partner Hospitals", value: "15+", icon: Globe },
];

const leadership = [
  {
    name: "Dr. Ahmed Rahman",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Leading our organization with 15+ years of healthcare management expertise and a vision to bridge Bangladesh-China medical collaboration.",
  },
  {
    name: "Dr. Fatima Hossain",
    position: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Driving operational excellence with extensive experience in international patient coordination and healthcare administration.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white text-gray-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            About <span className="text-[var(--color-primary)]">Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Bridging Bangladesh and China to provide world-class medical care with 
            compassion, expertise, and unwavering commitment to patient wellbeing.
          </p>
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-[var(--color-primary)]/20">
            <Quote className="w-10 h-10 text-[var(--color-primary)]/40 mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              To provide seamless access to advanced medical treatment in China while ensuring 
              continuous support and care in Bangladesh. We believe quality healthcare should be 
              accessible, affordable, and delivered with the highest standards of professionalism 
              and compassion.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-medium">Patient-First Approach</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Target className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-medium">Excellence in Care</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                <span className="text-sm font-medium">Global Collaboration</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-900">
            Meet Our <span className="text-[var(--color-primary)]">Leadership</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-blue-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gray-300 border-4 border-white shadow-lg overflow-hidden">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Info Container */}
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {leader.name}
                    </h4>
                    <p className="text-[var(--color-primary)] font-medium mb-3 text-sm">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
            <Award className="w-10 h-10 text-[var(--color-primary)] mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600 text-sm">
              We maintain the highest standards in every aspect of healthcare delivery and patient support.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
            <Heart className="w-10 h-10 text-[var(--color-primary)] mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Compassion</h4>
            <p className="text-gray-600 text-sm">
              Every patient is treated with empathy, respect, and personalized attention throughout their journey.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
            <Users className="w-10 h-10 text-[var(--color-primary)] mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Trust</h4>
            <p className="text-gray-600 text-sm">
              Building lasting relationships through transparency, reliability, and consistent quality care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Globe, TrendingUp, Quote, Shield, Clock, Plane, Headphones, CheckCircle, Building2, Stethoscope } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+", icon: Award },
  { label: "Patients Served", value: "5000+", icon: Users },
  { label: "Success Rate", value: "98%", icon: TrendingUp },
  { label: "Partner Hospitals", value: "15+", icon: Globe },
];

const journeySteps = [
  {
    icon: Headphones,
    title: "Initial Consultation",
    description: "Connect with our experienced consultants in Dhaka to discuss your medical needs and explore treatment options in China.",
  },
  {
    icon: Stethoscope,
    title: "Medical Evaluation",
    description: "We coordinate with Chinese hospitals to review your case and recommend the best treatment plan and specialists.",
  },
  {
    icon: Plane,
    title: "Travel & Visa Support",
    description: "Complete assistance with visa processing, travel arrangements, and pre-departure guidance for your medical trip.",
  },
  {
    icon: Building2,
    title: "Treatment in China",
    description: "Receive world-class medical care at Yunnan Provincial Hospital with our continuous support throughout your stay.",
  },
  {
    icon: Heart,
    title: "Follow-up Care",
    description: "Ongoing telemedicine consultations and continuous health support after you return to Bangladesh.",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Verified Partner Hospitals",
    description: "We work exclusively with certified, high-quality medical institutions in China including Yunnan Provincial Hospital.",
  },
  {
    icon: Users,
    title: "Experienced Local Team",
    description: "Our consultants in Dhaka understand your needs and provide personalized guidance in your language.",
  },
  {
    icon: Globe,
    title: "Cultural Bridge",
    description: "We bridge the cultural and language gap, making your medical journey in China smooth and comfortable.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance from initial consultation through recovery, ensuring you're never alone.",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-6">
              ChinaBangla Mediaid exists to provide seamless access to advanced medical treatment in China 
              while ensuring continuous support and care in Bangladesh. We believe quality healthcare should be 
              accessible, affordable, and delivered with the highest standards of professionalism and compassion. 
              Our partnership with Yunnan Provincial Hospital of Chinese Medicine enables Bangladeshi patients 
              to receive world-class treatment combining traditional Chinese medicine with modern healthcare innovation.
            </p>
            <div className="flex flex-wrap gap-4">
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
                  whileHover={{ scale: 1.05 }}
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

        {/* Your Healthcare Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Your <span className="text-[var(--color-primary)]">Healthcare Journey</span> With Us
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to complete recovery, we guide you through every step
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-blue-500 transform -translate-x-1/2" />

            <div className="space-y-12">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    {/* Content Card */}
                    <div className="flex-1">
                      <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-[var(--color-primary)]">ChinaBangla Mediaid</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out through our dedication, expertise, and comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our Core <span className="text-[var(--color-primary)]">Values</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
              <Award className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We maintain the highest standards in every aspect of healthcare delivery and patient support, 
                partnering only with certified hospitals and qualified professionals.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl transition-all">
              <Heart className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Compassion</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every patient is treated with empathy, respect, and personalized attention throughout their journey, 
                ensuring comfort and peace of mind.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
              <Users className="w-12 h-12 text-[var(--color-primary)] mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Trust</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building lasting relationships through transparency, reliability, and consistent quality care 
                that you can depend on at every stage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
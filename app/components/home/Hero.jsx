"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Users, Award, TrendingUp } from "lucide-react";
import Banner from "../../assets/Hero Banner.png";

const stats = [
  { icon: Users, value: "5000+", label: "Patients Served" },
  { icon: Globe, value: "15+", label: "Partner Hospitals" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

const floatingIcons = [
  { icon: CheckCircle, color: "text-green-500", delay: 0 },
  { icon: Globe, color: "text-blue-500", delay: 0.5 },
  { icon: Award, color: "text-purple-500", delay: 1 },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 text-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#006943]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Decorative Icons */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${
                index === 0 ? "top-32 right-20" : 
                index === 1 ? "bottom-40 left-32" : 
                "top-64 left-20"
              } hidden lg:block`}
            >
              <Icon className={`w-8 h-8 ${item.color}`} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content - Added padding-top for fixed navbar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#006943]/10 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-[#006943]" />
              <span className="text-sm font-medium text-[#006943]">
                Trusted by 5000+ Patients
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              <span className="text-[#006943]">World-Class</span>
              <br />
              <span className="text-gray-900">Healthcare,</span>
              <br />
              <span className="bg-gradient-to-r from-[#006943] to-blue-600 bg-clip-text text-transparent">
                Now Within Your Reach
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              sp ChinaBangla Mediaid connects Bangladesh with advanced medical
              treatment in China — offering trusted guidance, appointments, and
              continuous patient support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              {/* <Link
                href="/appointment"
                className="group inline-flex items-center justify-center gap-2 bg-[#006943] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#005236] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link> */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#006943] text-[#006943] font-semibold py-4 px-8 rounded-xl hover:bg-[#006943] hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-md border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-[#006943]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#006943]" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> */}
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            {/* Decorative Elements Behind Image */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#006943]/20 to-blue-500/20 rounded-3xl blur-2xl"
            />
            
            {/* Main Image Container */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#006943]/10 to-blue-500/10 rounded-3xl" />
                <Image
                  src={Banner}
                  alt="Doctor consulting patient"
                  fill
                  className="object-contain drop-shadow-2xl rounded-3xl p-4"
                  priority
                />
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Verified</div>
                    <div className="text-xs text-gray-600">Expert Care</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Global</div>
                    <div className="text-xs text-gray-600">Partnership</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
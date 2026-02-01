"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Star, Quote, PlayCircle, Users } from "lucide-react";

export default function CustomerReview() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 py-16 sm:py-20 md:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#006943]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div ref={containerRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#006943]/10 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-[#006943]" />
              <span className="text-sm font-medium text-[#006943]">
                Patient Testimonials
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900">Real Stories,</span>
              <br />
              <span className="bg-gradient-to-r from-[#006943] to-blue-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hear directly from our patients about their journey with ChinaBangla Mediaid. 
              Their success stories inspire us to continue delivering exceptional healthcare services.
            </motion.p>

            {/* Quote Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 max-w-xl mx-auto lg:mx-0"
            >
              <div className="w-12 h-12 bg-[#006943]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="w-6 h-6 text-[#006943]" />
              </div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-2">
                  "ChinaBangla Mediaid made my treatment journey seamless and stress-free. 
                  Highly professional and caring team!"
                </p>
                <p className="text-xs text-gray-500 font-medium">- Patient Review</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-10 h-10 bg-[#006943]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#006943]" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-600">Reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-full max-h-[500px] lg:max-h-[600px]"
          >
            {/* Decorative Elements Behind Video */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#006943]/20 to-blue-500/20 rounded-3xl blur-2xl"
            />
            
            {/* Video Container */}
            <div className="relative z-10 h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-full"
              >
                {shouldLoad ? (
                  <video
                    controls
                    preload="metadata"
                    poster="/videos/review-thumbnail.jpeg"
                    className="w-full h-full max-h-[500px] lg:max-h-[600px] object-cover"
                  >
                    <source src="/videos/review.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-full max-h-[500px] lg:max-h-[600px] flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    >
                      <PlayCircle className="w-12 h-12 text-[#006943]" />
                    </motion.div>
                  </div>
                )}
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Watch Now</div>
                    <div className="text-xs text-gray-600">Patient Journey</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
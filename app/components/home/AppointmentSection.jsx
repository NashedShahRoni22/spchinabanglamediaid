"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  "Medical Consultation & Treatment in China",
  "Patient Referrals & Hospital Appointments",
  "Follow-up & Telemedicine Services",
  "Visa & Travel Assistance for Medical Purpose",
  "Continuous Health Support in Bangladesh",
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export default function AppointmentSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, service });
    setStep(2);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/nashedshha@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Appointment Request - ${formData.service}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setStep(1);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            preferredDate: "",
            preferredTime: "",
            message: "",
          });
          setSubmitStatus("");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    if (step === 1) return formData.service !== "";
    if (step === 2) return formData.name && formData.email && formData.phone;
    if (step === 3) return formData.preferredDate && formData.preferredTime;
    return true;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 text-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-primary)]">Book Your Consultation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Schedule an <span className="text-[var(--color-primary)]">Appointment</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take the first step towards world-class healthcare. Book your consultation in just a few simple steps.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                  step >= num 
                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-110' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                </div>
                {num < 3 && (
                  <div className={`w-16 h-1 rounded transition-all duration-300 ${
                    step > num ? 'bg-[var(--color-primary)]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Success Message */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Request Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for choosing us. We'll contact you shortly to confirm your appointment details.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Check your email for confirmation
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 mx-8 mt-8 rounded-lg">
              ✗ Something went wrong. Please try again or contact us directly at +880 1731-106046
            </div>
          )}

          {submitStatus !== "success" && (
            <div className="p-8 md:p-12">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Select a Service</h3>
                  <p className="text-gray-600 mb-8">Choose the service you're interested in</p>
                  
                  <div className="grid gap-4">
                    {services.map((service, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleServiceSelect(service)}
                        className={`group relative p-6 rounded-2xl border-2 transition-all text-left ${
                          formData.service === service
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
                            : 'border-gray-200 hover:border-[var(--color-primary)]/50 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                              {service}
                            </h4>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.service === service
                              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
                              : 'border-gray-300'
                          }`}>
                            {formData.service === service && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Information</h3>
                  <p className="text-gray-600 mb-8">Please provide your contact details</p>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 text-[var(--color-primary)]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all bg-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all bg-white"
                        placeholder="+880 1234-567890"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Schedule */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Date & Time</h3>
                  <p className="text-gray-600 mb-8">Select your preferred appointment slot</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                        <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                        <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredTime: time })}
                            className={`py-3 px-4 rounded-xl font-medium transition-all ${
                              formData.preferredTime === time
                                ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FileText className="w-4 h-4 text-[var(--color-primary)]" />
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all resize-none bg-white"
                        placeholder="Any specific concerns or questions..."
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-3 px-6 rounded-xl font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!isStepValid()}
                    className="flex-1 py-3 px-6 rounded-xl font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="flex-1 py-3 px-6 rounded-xl font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Confirm <span className="hidden md:block">Appointment</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-8 text-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">Quick Response</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">Expert Consultants</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">Secure & Confidential</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
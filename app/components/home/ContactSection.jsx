"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        to_email: "parvinsultana912@gmail.com",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white text-gray-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Get In <span className="text-[var(--color-primary)]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our services? We're here to help you every step
            of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Address */}
              <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    H-165, R-1, Baridhara DOHS
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+8801976260695"
                    className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                  >
                    +880 1976-260695
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Email Address
                  </h3>
                  <a
                    href="mailto:info@spchinabanglamediaid.com"
                    className="text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                  >
                    info@spchinabanglamediaid.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4 p-6 bg-gradient-to-br from-[var(--color-primary)]/10 to-blue-500/10 rounded-2xl border border-[var(--color-primary)]/20">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Saturday - Thursday: 9:00 AM - 6:00 PM
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564891234567!2d90.42537931543213!3d23.813456589237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1e8c0a64d%3A0x1234567890abcdef!2sBaridhara%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Send Us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white"
                    placeholder="+880 1234-567890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                    ✓ Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    ✗ Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-xl font-medium hover:bg-[var(--color-primary)]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FiClock, FiShield, FiCreditCard, FiMapPin, FiUsers, FiCheckCircle } from "react-icons/fi";

const features = [
  {
    title: "Lightning Fast Response",
    description:
      "Average response time under 15 minutes. Real-time tracking so you know exactly when help arrives.",
    icon: <FiClock />,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "100% Verified Drivers",
    description:
      "Every driver is background-checked, certified, and rated. Your safety is our top priority.",
    icon: <FiShield />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Transparent Pricing",
    description:
      "Know the cost upfront. No hidden fees, secure payments, and instant digital receipts.",
    icon: <FiCreditCard />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Live GPS Tracking",
    description:
      "Track your tow truck in real-time. Share your location with family and get accurate ETAs.",
    icon: <FiMapPin />,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "24/7 Availability",
    description:
      "Round-the-clock service, 365 days a year. We're always here when you need us most.",
    icon: <FiUsers />,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Instant Booking",
    description:
      "Book in seconds through our app or website. No phone calls, no waiting, just instant service.",
    icon: <FiCheckCircle />,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-primary-50/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700"
          >
            Why Choose Us
          </motion.span>
          <h2 className="mt-6 text-3xl font-bold text-accent-black sm:text-4xl lg:text-5xl">
            Everything You Need For
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Peace of Mind
            </span>
          </h2>
          <p className="mt-4 text-lg text-accent-gray sm:text-xl">
            Professional roadside assistance designed for the modern driver
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor} text-3xl ${feature.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-accent-black">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-accent-gray">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid gap-6 sm:grid-cols-3"
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "15 min", label: "Avg Response Time" },
            { number: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-6 text-center shadow-card"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-accent-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { BookingForm } from "./BookingForm";
import { FiClock, FiShield, FiMapPin, FiCreditCard } from "react-icons/fi";

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50/30 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-48 w-48 rounded-full bg-primary-300/20 blur-2xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6 text-center lg:text-left"
        >
          <span className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            Emergency Dispatch
          </span>
          <h2 className="text-3xl font-bold text-accent-black sm:text-4xl lg:text-5xl">
            Help Is En Route
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              The Moment You Book
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-accent-gray">
            Our command center triangulates your location, assigns a verified driver, and keeps you updated every step of
            the way. We stay on the line until you are safely on the move again.
          </p>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              { icon: <FiClock />, text: "Dispatch within 15 minutes", color: "text-orange-600", bg: "bg-orange-50" },
              { icon: <FiShield />, text: "ID-verified tow experts", color: "text-green-600", bg: "bg-green-50" },
              { icon: <FiMapPin />, text: "Live GPS tracking link", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: <FiCreditCard />, text: "Secure digital payments", color: "text-orange-600", bg: "bg-orange-50" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center gap-3 rounded-xl ${item.bg} p-4`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} text-xl`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-accent-black">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <BookingForm />
      </div>
    </section>
  );
}



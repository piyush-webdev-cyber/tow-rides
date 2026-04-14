"use client";
import { motion } from "framer-motion";
import { FiClock, FiShield, FiTrendingUp } from "react-icons/fi";

const signals = [
  {
    title: "24/7 Assistance",
    subtitle: "Rapid support across the city",
    icon: <FiClock />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Secure Payments",
    subtitle: "Encrypted transactions & receipts",
    icon: <FiShield />,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "50K+ Rescues",
    subtitle: "Trusted by drivers nationwide",
    icon: <FiTrendingUp />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${signal.bgColor} text-3xl ${signal.color} shadow-lg`}
              >
                {signal.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{signal.title}</h3>
              <p className="text-sm text-white/80">{signal.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


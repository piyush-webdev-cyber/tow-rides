"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { FiClock, FiShield, FiMapPin, FiStar } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-10 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
            >
              <FiShield className="text-white" />
              <span className="text-sm font-medium text-white">24/7 Roadside Assistance</span>
            </motion.div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Get Help</span>
              <span className="block bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                In Minutes, Not Hours
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              Professional towing services at your fingertips. Book instantly, track in real-time, and get back on the road faster.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Response", value: "< 15 min", icon: <FiClock /> },
                { label: "Verified", value: "100%", icon: <FiShield /> },
                { label: "Rating", value: "4.9★", icon: <FiStar /> },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="mb-2 text-2xl text-white">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Button
                href="/book"
                className="w-full bg-white text-primary-600 hover:bg-white/90 hover:shadow-glow-orange sm:w-auto"
                glow="none"
              >
                Book Now
              </Button>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  href="#"
                  variant="ghost"
                  className="w-full justify-center gap-3 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                  glow="none"
                >
                  <SiGoogleplay className="text-xl" />
                  <span>Play Store</span>
                </Button>
                <Button
                  href="#"
                  variant="ghost"
                  className="w-full justify-center gap-3 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                  glow="none"
                >
                  <SiAppstore className="text-xl" />
                  <span>App Store</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Content - App Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card-hover">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                      Active Rescue
                    </p>
                    <p className="mt-1 text-2xl font-bold text-accent-black">Tow #1027</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <FiMapPin className="text-xl text-primary-600" />
                  </div>
                </div>

                {/* Driver Info */}
                <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                      JD
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-accent-black">John Driver</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="fill-current" size={14} />
                          ))}
                        </div>
                        <span className="text-xs text-accent-gray">4.9 • Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ETA Card */}
                <div className="mb-4 rounded-2xl border-2 border-primary-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-accent-gray">Estimated Arrival</p>
                      <p className="mt-1 text-2xl font-bold text-primary-600">12 min</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <FiClock className="text-primary-600" size={20} />
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="rounded-xl bg-primary-600 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-white">Driver En Route</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 rounded-2xl bg-white p-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-accent-black">Live Tracking</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-3 shadow-card"
              >
                <div className="text-center">
                  <p className="text-xs text-accent-gray">Avg Response</p>
                  <p className="text-lg font-bold text-primary-600">14 min</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const screenshots = [
  {
    title: "Live Driver Tracking",
    description: "Watch your rescue team arrive in real-time with precise ETAs and driver details.",
    gradient: "from-orange-300 via-orange-500 to-primary",
  },
  {
    title: "Secure Digital Payments",
    description: "Approve transparent pricing and pay securely with saved cards or UPI wallets.",
    gradient: "from-zinc-200 via-white to-primary/40",
  },
  {
    title: "Command Center Chat",
    description: "Message the dispatcher instantly and share photos, insurance, or notes.",
    gradient: "from-slate-900 via-black to-primary/70",
  },
];

export function AppScreenshotCarousel() {
  const [index, setIndex] = useState<number>(0);

  const next = () => setIndex((prev: number) => (prev + 1) % screenshots.length);
  const prev = () => setIndex((prev: number) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="relative w-full max-w-2xl">
      <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={screenshots[index].title}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`flex flex-col gap-6 bg-gradient-to-br ${screenshots[index].gradient} p-10 text-accent-black`}
          >
            <div className="rounded-3xl bg-black/10 p-4 text-xs uppercase tracking-[0.3em] text-black/50">
              Mobile App Preview
            </div>
            <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="rounded-[1.25rem] border border-black/5 bg-gradient-to-br from-white via-white to-orange-50 p-6 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-black/40">Tow Rides UI</p>
                <h3 className="mt-3 text-2xl font-semibold text-black">{screenshots[index].title}</h3>
                <p className="mt-4 text-sm text-black/70">{screenshots[index].description}</p>
                <div className="mt-6 grid gap-2 text-[0.7rem] uppercase tracking-widest text-black/50">
                  <span className="rounded-xl bg-black/5 px-3 py-2">Swipe to preview next</span>
                  <span className="rounded-xl bg-black/5 px-3 py-2">Powered by Tow Rides OS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={prev}
        className="absolute -left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-xl text-black transition hover:scale-110 hover:shadow-glow-black"
        aria-label="Previous screenshot"
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute -right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-xl text-black transition hover:scale-110 hover:shadow-glow-black"
        aria-label="Next screenshot"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}



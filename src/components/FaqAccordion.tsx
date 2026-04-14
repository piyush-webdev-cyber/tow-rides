"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How fast can Tow Rides reach me?",
    answer:
      "We dispatch within minutes. In metro areas, the average arrival time is under 20 minutes. You receive live tracking immediately after confirmation.",
  },
  {
    question: "Do you support cashless or insurance-based payments?",
    answer:
      "Yes. Pay via cards, UPI, or digital wallets. We also integrate with major roadside insurance partners and provide invoices for reimbursements.",
  },
  {
    question: "Can I book a tow for a friend or family member?",
    answer:
      "Absolutely. Share their contact number and location, and we will coordinate directly while keeping you in the loop with updates.",
  },
  {
    question: "What vehicle types do you cover?",
    answer:
      "We support motorbikes, passenger cars, premium vehicles, SUVs, and light commercial trucks with dedicated equipment.",
  },
  {
    question: "Is support really 24/7?",
    answer:
      "Yes. Our command center operates every hour of the year. You can reach us by phone, WhatsApp, or in-app live chat anytime.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  const toggle = (index: number) => {
    setOpen((prev: number) => (prev === index ? -1 : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const active = open === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(0,0,0,0.16)]"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold uppercase tracking-wide ${
                active ? "text-primary" : "text-accent-black"
              }`}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: active ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-black bg-white text-lg text-accent-black"
              >
                <FiChevronDown />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="px-6 pb-6 text-sm text-accent-black/70"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}



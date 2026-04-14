import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/Button";
import { FiCheck, FiMessageCircle, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Book A Tow",
  description:
    "Request a tow truck or roadside rescue instantly. Share your location, vehicle details, and issue to dispatch verified drivers within minutes.",
};

export default function BookPage() {
  return (
    <div className="bg-gradient-to-b from-white to-primary-50/30 text-accent-black min-h-screen">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-200/20 to-transparent blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-6">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              Roadside Booking Center
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Reliable Roadside Rescue
              <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                One Click Away
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-accent-gray">
              Submit a booking request and we&apos;ll confirm within minutes. Our dispatch team pairs you with the
              nearest certified tow specialist, keeps you updated, and ensures transparent pricing throughout.
            </p>
            <div className="rounded-3xl bg-white p-8 shadow-card-hover border border-primary-100">
              <p className="text-sm font-semibold text-primary-700 mb-4">What happens next</p>
              <ul className="space-y-3 leading-relaxed text-accent-gray">
                {[
                  "Command center reviews your request instantly.",
                  "We call/text to confirm the exact pickup point.",
                  "Track your rescue team with a live shareable link.",
                  "Secure your payment digitally once the job is done.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100">
                      <FiCheck className="text-xs text-primary-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/whatsapp"
                  className="w-full justify-center bg-primary-600 text-white hover:bg-primary-700 border-0 sm:w-auto"
                  glow="none"
                >
                  <FiMessageCircle />
                  Need Instant Chat?
                </Button>
                <Button
                  href="tel:+919316062600"
                  className="w-full justify-center bg-white text-primary-600 border-2 border-primary-200 hover:bg-primary-50 sm:w-auto"
                  glow="none"
                >
                  <FiPhone />
                  Call Support
                </Button>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}



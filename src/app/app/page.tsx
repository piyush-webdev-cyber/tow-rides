import type { Metadata } from "next";
import { AppScreenshotCarousel } from "@/components/AppScreenshotCarousel";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Mobile App",
  description:
    "Download the Tow Rides mobile app for live driver tracking, secure payments, and 24/7 roadside control from anywhere.",
};

export default function AppDownloadPage() {
  return (
    <div className="bg-white text-accent-black">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/10 to-white" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.5em] text-primary/80">Tow Rides App Portal</p>
            <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
              Control Every Rescue From The App
            </h1>
            <p className="text-lg text-black/70">
              Tow Rides for iOS and Android keeps you prepared for the unexpected. Trigger instant bookings, share live
              tracking with family, and store documents all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/downloads/towrides-customer.apk"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-1 sm:w-auto"
              >
                <FiDownload />
                Download Customer App (APK)
              </Link>
              <Link
                href="/downloads/towrides-partner.apk"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-black bg-white px-6 py-4 text-sm font-semibold uppercase tracking-wide text-accent-black transition hover:-translate-y-1 sm:w-auto"
              >
                <FiDownload />
                Download Partner App (APK)
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Live Driver Tracking", description: "Know who is coming, when they arrive, and share the link." },
                { title: "Secure Payments", description: "Authorize payments, add tips, and download invoices instantly." },
                { title: "24/7 Assistance", description: "Chat with dispatch or call our hotline right inside the app." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border-2 border-black bg-white p-5 text-sm shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
                >
                  <p className="uppercase text-xs tracking-[0.3em] text-primary/80">{feature.title}</p>
                  <p className="mt-3 text-black/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <AppScreenshotCarousel />
        </div>
      </section>
    </div>
  );
}



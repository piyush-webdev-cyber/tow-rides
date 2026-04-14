import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Reach Tow Rides customer support by phone, WhatsApp, or email. Explore FAQs and self-service options for roadside assistance.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-accent-black">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-accent-black/60">Contact & Support</p>
          <h1 className="text-4xl font-bold sm:text-5xl">We are with you on every mile</h1>
          <p className="text-lg text-accent-black/70 sm:max-w-2xl">
            Our operations desk is always available to guide you, dispatch rescue teams, or answer questions about your
            account. Choose the channel that works best for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Hotline</p>
              <p className="mt-3 text-2xl font-semibold text-accent-black">Emergency Support 24/7</p>
              <a
                href="tel:+919316062600"
                className="mt-4 inline-flex items-center justify-center rounded-2xl border-2 border-black bg-primary px-6 py-3 text-lg font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                +91 93160 62600
              </a>
              <p className="mt-4 text-sm text-accent-black/70">
                Call us for any urgent roadside issue. We will stay on the line until you are safe.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border-2 border-black bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">WhatsApp Business</p>
                <p className="mt-3 text-lg font-semibold text-accent-black">+91 93160 62600</p>
                <Button
                  href="https://wa.me/919316062600?text=Hi%20Tow%20Rides%20team%2C%20I%20need%20roadside%20assistance.%20Please%20contact%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full justify-center"
                  glow="black"
                >
                  Chat On WhatsApp
                </Button>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Email</p>
                <a
                  href="mailto:support@towrides.com"
                  className="mt-2 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-accent-black/70 transition hover:text-primary"
                >
                  support@towrides.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">Self-Service</p>
                <div className="mt-2 grid gap-3 text-sm text-accent-black/70">
                  <a href="/book" className="rounded-2xl border-2 border-black bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:bg-primary/10">
                    Book a Tow Online
                  </a>
                  <a href="/app" className="rounded-2xl border-2 border-black bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:bg-primary/10">
                    Manage From The App
                  </a>
                  <a href="/whatsapp" className="rounded-2xl border-2 border-black bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:bg-primary/10">
                    WhatsApp Instant Booking
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-black bg-gradient-to-br from-primary/15 via-white to-white p-6 text-sm text-accent-black/80 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Postal</p>
              <p className="mt-3 text-sm font-semibold text-accent-black">Tow Rides HQ</p>
              <p className="mt-1 text-accent-black/70">
                240 Rescue Drive, Suite 12 <br />
                Austin, TX 73301
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-black/60">Answers</p>
            <h2 className="mt-3 text-3xl font-semibold text-accent-black">Frequently asked questions</h2>
            <p className="mt-3 text-sm text-accent-black/70">
              Browse our quick answers. Still need help? Our support specialists reply in minutes over WhatsApp or the hotline.
            </p>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



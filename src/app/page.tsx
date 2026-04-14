import { HeroSection } from "@/components/HeroSection";
import { TrustSignals } from "@/components/TrustSignals";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/Button";
import { FiCheck, FiDownload, FiSmartphone } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <FeaturesSection />
      <TestimonialsSection />
      
      {/* App Download Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm mb-6">
                <FiSmartphone className="text-white" />
                <span className="text-sm font-medium text-white">Download Now</span>
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Get the Tow Rides App
                <span className="block mt-2">Before You Need It</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Keep emergency contacts, vehicle insurance, and service history in one secure place. 
                Access one-tap rescue, live driver tracking, and instant proof-of-service receipts from anywhere.
              </p>

              {/* Features List */}
              <ul className="mt-8 space-y-4 text-left">
                {[
                  "Live ETA notifications shared with family",
                  "Digital wallet for payments and driver tipping",
                  "Service history and roadside insurance integration",
                  "One-tap WhatsApp and Voice Support",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/90">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <FiCheck className="text-sm text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Download Buttons */}
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Button
                  href="/app"
                  className="w-full bg-white text-primary-600 hover:bg-white/90 hover:shadow-glow-orange sm:w-auto"
                  glow="none"
                >
                  <FiDownload className="text-lg" />
                  Explore The App
                </Button>
                <Button
                  href="/book"
                  className="w-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 sm:w-auto"
                  glow="none"
                >
                  Book A Tow
                </Button>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl bg-white p-8 shadow-card-hover">
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800">
                      <FiSmartphone className="text-4xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-black">Tow Rides App</h3>
                    <p className="mt-2 text-sm text-accent-gray">Available on iOS & Android</p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-primary-50 p-4">
                      <p className="text-sm font-semibold text-primary-700">Quick Access</p>
                      <p className="mt-1 text-xs text-accent-gray">
                        Book a tow in seconds with one tap
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary-50 p-4">
                      <p className="text-sm font-semibold text-primary-700">Live Tracking</p>
                      <p className="mt-1 text-xs text-accent-gray">
                        Real-time updates on driver location
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary-50 p-4">
                      <p className="text-sm font-semibold text-primary-700">Secure Payments</p>
                      <p className="mt-1 text-xs text-accent-gray">
                        Pay safely with digital wallet
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-4 py-2 shadow-card">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-accent-black">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

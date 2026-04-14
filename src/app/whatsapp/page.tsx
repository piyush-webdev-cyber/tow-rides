import type { Metadata } from "next";
import { Button } from "@/components/Button";

const whatsappMessage = encodeURIComponent(
  "Hi Tow Rides team, I need roadside assistance. Please let me know the next steps."
);

export const metadata: Metadata = {
  title: "WhatsApp Booking",
  description:
    "Start an instant WhatsApp conversation with Tow Rides support. Prefilled messages get you connected to a live dispatcher within seconds.",
};

export default function WhatsAppPage() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary text-accent-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-8 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-12 right-1/4 h-56 w-56 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-black/70">Need instant help?</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Book Instantly via WhatsApp</h1>
        <p className="max-w-2xl text-lg text-black/80">
          Tap below to open WhatsApp Web with a prefilled message. Share your location or landmarks and our support team
          will confirm your booking, assign a driver, and stay by your side until you are safe.
        </p>
        <Button
          href={`https://wa.me/919316062600?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-md justify-center rounded-[2rem] bg-accent-black text-accent-white text-lg shadow-glow-white hover:bg-accent-white hover:text-primary"
        >
          Book Instantly via WhatsApp
        </Button>
        <p className="text-sm uppercase tracking-wide text-black/70">
          Our support team will confirm and dispatch your driver.
        </p>
      </div>
    </div>
  );
}



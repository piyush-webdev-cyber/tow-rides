"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";

type BookingFormProps = {
  variant?: "default" | "compact";
};

type FormState = {
  pickupLocation: string;
  dropoffLocation: string;
  vehicleType: string;
  issueType: string;
  contactNumber: string;
};

const initialState: FormState = {
  pickupLocation: "",
  dropoffLocation: "",
  vehicleType: "Car",
  issueType: "Flat Tire",
  contactNumber: "",
};

const vehicleOptions = ["Car", "Bike", "Truck"] as const;
const issueOptions = ["Flat Tire", "Engine Trouble", "Accident", "Others"] as const;

export function BookingForm({ variant = "default" }: BookingFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormState((prev: FormState) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Booking received:", formState);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Tow Rides team, I need a tow truck near ${
      formState.pickupLocation || "my current location"
    } for my ${formState.vehicleType.toLowerCase()}. Issue: ${
      formState.issueType
    }. Contact: ${formState.contactNumber || "please call me back as soon as possible."}`,
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`glass-card relative flex flex-col gap-6 rounded-3xl border-2 border-black bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-8 ${
        variant === "compact" ? "max-w-xl" : ""
      }`}
      id="booking-form"
    >
      <div className="space-y-2 text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-black/60">Book in under 60 seconds</p>
        <h3 className="text-2xl font-semibold text-accent-black sm:text-3xl">Instant Tow Truck Booking</h3>
        <p className="text-sm text-accent-black/70">
          Share where you are and what happened. Our command center will confirm in minutes and dispatch the nearest
          rescue team.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 text-sm text-accent-black/80">
          <span className="uppercase tracking-wide text-xs text-accent-black/60">Pickup Location</span>
          <input
            type="text"
            required
            value={formState.pickupLocation}
            onChange={handleChange("pickupLocation")}
            placeholder="Share your current location"
            className="rounded-xl border-2 border-black bg-white px-4 py-3 text-accent-black placeholder:text-accent-black/40 focus:outline-none focus:ring-4 focus:ring-primary/30"
          />
        </label>
        <label className="flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 text-sm text-accent-black/80">
          <span className="uppercase tracking-wide text-xs text-accent-black/60">Drop-Off Location</span>
          <input
            type="text"
            value={formState.dropoffLocation}
            onChange={handleChange("dropoffLocation")}
            placeholder="Preferred workshop or destination"
            className="rounded-xl border-2 border-black bg-white px-4 py-3 text-accent-black placeholder:text-accent-black/40 focus:outline-none focus:ring-4 focus:ring-primary/30"
          />
        </label>
        <label className="flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 text-sm text-accent-black/80">
          <span className="uppercase tracking-wide text-xs text-accent-black/60">Vehicle Type</span>
          <select
            value={formState.vehicleType}
            onChange={handleChange("vehicleType")}
            className="rounded-xl border-2 border-black bg-white px-4 py-3 text-accent-black focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            {vehicleOptions.map((vehicle) => (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 text-sm text-accent-black/80">
          <span className="uppercase tracking-wide text-xs text-accent-black/60">Nature of Issue</span>
          <select
            value={formState.issueType}
            onChange={handleChange("issueType")}
            className="rounded-xl border-2 border-black bg-white px-4 py-3 text-accent-black focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            {issueOptions.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2 flex flex-col gap-2 rounded-2xl border-2 border-black bg-white p-4 text-sm text-accent-black/80">
          <span className="uppercase tracking-wide text-xs text-accent-black/60">Contact Number</span>
          <input
            type="tel"
            required
            value={formState.contactNumber}
            onChange={handleChange("contactNumber")}
            placeholder="We will reach you instantly"
            className="rounded-xl border-2 border-black bg-white px-4 py-3 text-accent-black placeholder:text-accent-black/40 focus:outline-none focus:ring-4 focus:ring-primary/30"
          />
        </label>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-dashed border-black/20 bg-white p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-accent-black/70">
              <p className="font-semibold uppercase tracking-wide text-accent-black">Live Map</p>
              <p>Drop a pin or describe your landmark. Our agent will verify within seconds.</p>
            </div>
            <div className="flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-white md:w-64">
              {formState.pickupLocation.trim() ? (
                <iframe
                  key={formState.pickupLocation}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(formState.pickupLocation)}&z=14&ie=UTF8&iwloc=&output=embed`}
                  title="Pickup location map preview"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-primary/5 text-xs uppercase tracking-wide text-accent-black/50">
                  Map Preview
                  <span className="text-[10px] normal-case text-accent-black/40">Add a pickup location</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full justify-center" glow="black">
          Book Tow Truck Now
        </Button>
      </div>

      {submitted && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border-2 border-green-600/30 bg-green-500/10 p-4 text-sm text-green-700"
        >
          <p className="font-semibold uppercase tracking-wide text-green-800">Booking received!</p>
          <p className="mt-1 text-green-700">
            Our team will contact you shortly. Tap below if you prefer instant confirmation over WhatsApp.
          </p>
          <Button
            href={`https://wa.me/919316062600?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            glow="black"
            className="mt-3 w-full justify-center text-sm"
          >
            Send WhatsApp Confirmation
          </Button>
        </motion.div>
      )}
    </motion.form>
  );
}



"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from "react-icons/fi";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Samantha Ortiz",
    role: "E-commerce Founder",
    quote:
      "My delivery van blew a tire at 2 AM. Tow Rides had a tow on-site in under 15 minutes and kept me calm the entire time. Absolutely professional service!",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 5,
  },
  {
    name: "Marcus Lee",
    role: "Photographer",
    quote:
      "Transparent pricing and instant updates. I knew exactly what I was paying for before they even hooked up my car. No surprises, just great service.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Lina Patel",
    role: "Road Tripper",
    quote:
      "We were stuck on a remote highway. Their verified driver arrived with water, checked on us, and got us safely to a service center. Lifesavers!",
    avatar: "https://i.pravatar.cc/150?img=24",
    rating: 5,
  },
  {
    name: "Jason Chen",
    role: "Logistics Manager",
    quote:
      "We now use Tow Rides for our entire fleet because they consistently deliver fast, professional support nationwide. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    quote:
      "Best towing service I've ever used. The app is so easy, and the driver was incredibly professional. Got me back on the road in no time!",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            Customer Reviews
          </span>
          <h2 className="mt-6 text-3xl font-bold text-accent-black sm:text-4xl lg:text-5xl">
            Loved By Thousands Of
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>
          <p className="mt-4 text-lg text-accent-gray">
            Real stories from real people who trust Tow Rides
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="rounded-3xl bg-gradient-to-br from-white to-primary-50/50 p-8 shadow-card-hover md:p-12">
                  {/* Quote Icon */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                      <FiMessageSquare className="text-2xl" />
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                        <FiStar
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                          size={20}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xl leading-relaxed text-accent-black md:text-2xl">
                    &ldquo;{testimonials[index].quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={testimonials[index].avatar}
                        alt={testimonials[index].name}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-full object-cover ring-4 ring-primary-100"
                      />
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-accent-black">
                        {testimonials[index].name}
                      </p>
                      <p className="text-sm text-accent-gray">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-accent-black shadow-card transition-all hover:bg-primary-50 hover:text-primary-600 hover:shadow-card-hover"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, indicatorIndex) => (
                  <button
                    key={indicatorIndex}
                    type="button"
                    onClick={() => setIndex(indicatorIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      indicatorIndex === index
                        ? "w-8 bg-primary-600"
                        : "w-2 bg-primary-200 hover:bg-primary-300"
                    }`}
                    aria-label={`Go to testimonial ${indicatorIndex + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-accent-black shadow-card transition-all hover:bg-primary-50 hover:text-primary-600 hover:shadow-card-hover"
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* All Testimonials Grid (Desktop) */}
          <div className="mt-16 hidden grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm text-accent-gray line-clamp-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-accent-black">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-accent-gray">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


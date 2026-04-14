"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book" },
  { href: "/whatsapp", label: "WhatsApp" },
  { href: "/app", label: "App" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-card border-b border-primary-100"
          : "bg-white/80 backdrop-blur-lg border-b border-primary-50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-xl md:text-2xl"
          aria-label="Tow Rides home"
        >
          <div className="relative">
            <Image
              src="/media/logo.png"
              alt="Tow Rides logo"
              width={180}
              height={72}
              className="h-12 w-auto md:h-14"
              priority
            />
          </div>
        
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-accent-gray hover:text-primary-600 hover:bg-primary-50/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            href="/book"
            className="bg-primary-600 text-white hover:bg-primary-700 shadow-glow-orange border-0"
            glow="none"
          >
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-accent-black transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-80 bg-white shadow-card-hover z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "text-accent-black hover:bg-primary-50 hover:text-primary-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 mt-4 border-t border-primary-100">
                  <Button
                    href="/book"
                    onClick={closeMenu}
                    className="w-full justify-center bg-primary-600 text-white hover:bg-primary-700 border-0"
                    glow="none"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


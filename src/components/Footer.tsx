import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const socials = [
  { href: "https://instagram.com", icon: <FiInstagram />, label: "Instagram" },
  { href: "https://facebook.com", icon: <FiFacebook />, label: "Facebook" },
  { href: "https://x.com", icon: <FiTwitter />, label: "X" },
];

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/help", label: "Help Center" },
    { href: "/faq", label: "FAQ" },
    { href: "/safety", label: "Safety" },
    { href: "/support", label: "Support" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/legal", label: "Legal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-primary-50/50 border-t border-primary-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Tow Rides
            </h3>
            <p className="mb-6 max-w-md text-accent-gray leading-relaxed">
              Your trusted partner for reliable roadside assistance. Professional towing services available 24/7, whenever and wherever you need us.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-accent-gray">
                <FiPhone className="text-primary-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-accent-gray">
                <FiMail className="text-primary-600" />
                <span>support@towrides.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-accent-gray">
                <FiMapPin className="text-primary-600" />
                <span>Available Nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-accent-gray shadow-card transition-all hover:bg-primary-600 hover:text-white hover:shadow-card-hover"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold text-accent-black">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gray transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 font-semibold text-accent-black">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gray transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-semibold text-accent-black">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-gray transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-accent-gray">
              © {new Date().getFullYear()} Tow Rides. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-accent-gray">
              <Link href="/terms" className="transition-colors hover:text-primary-600">
                Terms
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-primary-600">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


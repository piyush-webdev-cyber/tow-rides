import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ChatWidget } from "@/components/ChatWidget";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://towrides.example.com";
const siteTitle = "Tow Rides | Reliable Roadside Assistance";
const siteDescription =
  "Tow Rides delivers 24/7 roadside assistance with verified tow drivers, transparent pricing, and instant booking across the city.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Tow Rides",
  },
  description: siteDescription,
  keywords: [
    "roadside assistance",
    "tow truck",
    "emergency towing",
    "vehicle recovery",
    "Tow Rides",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Tow Rides",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dummyimage.com/1200x630/ff6b00/000000.png&text=Tow+Rides",
        width: 1200,
        height: 630,
        alt: "Tow Rides Roadside Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://dummyimage.com/1200x630/ff6b00/000000.png&text=Tow+Rides"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-white antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTopButton />
        <ChatWidget />
      </body>
    </html>
  );
}

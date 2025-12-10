import type { Metadata } from "next";
import {
  Courier_Prime,
  Inter,
  Patrick_Hand,
  Permanent_Marker
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-handwriting"
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marker"
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kampus.fun"),
  title: "Kampus — Your Campus, Simplified",
  description:
    "UF's student marketplace for textbooks, furniture, rides, housing, and events. Trusted by 250+ Gators.",
  keywords: [
    "Kampus",
    "student marketplace",
    "UF",
    "GatorEx",
    "Rydify",
    "Vybr",
    "Tribzy",
    "textbooks",
    "rideshare",
    "housing",
    "events",
    "Gators"
  ],
  authors: [{ name: "Kampus" }],
  openGraph: {
    title: "Kampus — Your Campus, Simplified",
    description:
      "Discover trusted student-to-student apps for textbooks, rides, housing, and events at UF.",
    url: "https://kampus.fun",
    siteName: "Kampus",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@kampus_fun",
    title: "Kampus — Your Campus, Simplified",
    description:
      "All-in-one student marketplace trusted by 250+ Gators. Textbooks, rides, housing, events."
  },
  manifest: "/manifest.json"
};

export const viewport = {
  themeColor: "#D4A574"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${patrickHand.variable} ${permanentMarker.variable} ${courierPrime.variable}`}
    >
      <body className="min-h-screen bg-[#D4A574] text-gray-900 overflow-x-hidden selection:bg-[#FEF08A] selection:text-black">
        <div className="fixed inset-0 bg-noise pointer-events-none z-0 mix-blend-overlay opacity-50" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}


"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Car,
  ChevronDown,
  Heart,
  Home,
  Instagram,
  Linkedin,
  Menu,
  PartyPopper,
  ShieldCheck,
  Star,
  Twitter,
  X
} from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Is Kampus free to use?",
    answer:
      "Yes! Kampus is 100% free for students to browse and list items. We're built for Gators, by Gators."
  },
  {
    question: "How do I verify my .edu email?",
    answer:
      "Simply sign up with your ufl.edu email address. We'll send a magic link to verify your student status instantly."
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Absolutely. We use bank-level encryption and never share your personal data with third-party advertisers."
  },
  {
    question: "Can I use Kampus on my phone?",
    answer:
      "Yes, our site is fully responsive and works great on mobile. A dedicated app is coming soon!"
  },
  {
    question: "What if I have issues with a transaction?",
    answer:
      "Our support team is here to help. Report any suspicious activity directly through the item listing."
  }
];

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const apps = useMemo(
    () => [
      {
        name: "GatorEx",
        category: "Textbooks",
        icon: <BookOpen className="w-8 h-8 text-orange-600" />,
        badgeClass: "rotate-2",
        copy: "Sell textbooks in seconds.",
        points: ["Instant listings", "Send payment", "Secure payments"],
        tapeClass: "bg-orange-400/20 rotate-2",
        href: "https://www.gatorex.shop/"
      },
      {
        name: "Rydify",
        category: "Rideshare",
        icon: <Car className="w-8 h-8 text-slate-800" />,
        badgeClass: "rotate-2",
        copy: "Split ride costs effortlessly.",
        points: ["Cost splitting", "Route optimization", "Safety features"],
        tapeClass: "bg-slate-800/20 -rotate-2",
        href: "https://rydify.co/"
      },
      {
        name: "Vybr",
        category: "Housing",
        icon: <Home className="w-8 h-8 text-purple-600" />,
        badgeClass: "rotate-2",
        copy: "Discover your dream housing.",
        points: ["Verified listings", "Virtual tours", "Roommate matching"],
        tapeClass: "bg-purple-500/20 rotate-2",
        href: "https://www.vybr.club/"
      },
      {
        name: "Tribzy",
        category: "Events",
        icon: <PartyPopper className="w-8 h-8 text-pink-600" />,
        badgeClass: "rotate-2",
        copy: "Never miss campus events.",
        points: ["Event discovery", "RSVP tracking", "Social features"],
        tapeClass: "bg-pink-500/20 -rotate-2",
        href: "https://tribzy.com/"
      }
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center relative">
          <div className="relative group cursor-pointer -rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-white p-2 px-4 shadow-lg border-2 border-gray-100 rounded-sm">
              <h1 className="text-3xl font-black tracking-tighter text-blue-600 font-marker">
                Kampus.
              </h1>
            </div>
            <div className="absolute h-8 w-16 bg-white/40 backdrop-blur-[1px] shadow-sm z-20 -top-3 -left-2 -rotate-6 washi-mask box-shadow-sm" />
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#faq"
              className="font-handwriting text-xl text-gray-800 hover:text-blue-600 hover:-translate-y-1 transition-transform decoration-wavy hover:underline decoration-blue-400"
            >
              FAQ
            </Link>
            <Link
              href="#apps"
              className="font-handwriting text-xl text-gray-800 hover:text-blue-600 hover:-translate-y-1 transition-transform decoration-wavy hover:underline decoration-blue-400"
            >
              Apps
            </Link>
            <Link
              href="#contact"
              className="font-handwriting text-xl text-gray-800 hover:text-blue-600 hover:-translate-y-1 transition-transform decoration-wavy hover:underline decoration-blue-400"
            >
              Contact
            </Link>
            <button className="bg-black text-white px-6 py-2 rounded-full font-bold transform hover:scale-105 hover:rotate-2 transition-all shadow-xl border-2 border-white">
              Log In
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden text-gray-800 bg-white p-2 rounded shadow-md z-50 relative"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-[#FEF08A] shadow-xl p-6 flex flex-col gap-4 md:hidden border-b-4 border-dashed border-gray-400 transition-height ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {[
            { href: "#faq", label: "FAQ" },
            { href: "#apps", label: "Apps" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-marker text-2xl text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-10">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-7xl w-full mx-auto px-4 grid md:grid-cols-2 gap-12 relative z-10">
          <div className="flex flex-col justify-center items-start space-y-6 order-1 md:order-1 relative">
            <div className="absolute -top-8 right-10 hidden md:block animate-float-slow z-20">
              <span className="font-handwriting text-xl text-gray-900 bg-yellow-200 px-3 py-1 shadow-sm rotate-6 block border border-black/10 text-center">
                Simplified!
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                className="transform rotate-90 text-gray-800 ml-4 mt-1"
              >
                <path
                  d="M10,50 Q50,10 90,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M80,35 L90,50 L75,60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-sm shadow-2xl relative transform -rotate-1 border border-gray-200">
              <div className="absolute h-8 w-32 bg-white/40 backdrop-blur-[1px] shadow-sm z-20 -top-4 left-10 -rotate-2 washi-mask" />
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-4">
                YOUR CAMPUS,
                <br />
                <span className="text-blue-600 font-marker relative inline-block">
                  SIMPLIFIED.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-80"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0,5 Q50,10 100,5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-handwriting text-gray-700 leading-relaxed max-w-lg">
                The UF student marketplace for textbooks, furniture, rides, housing, and events trusted by 250+ Gators.
              </p>
            </div>

            <button className="group relative inline-block focus:outline-none focus:ring mt-4">
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-sm" />
              <span className="relative inline-block border-2 border-current px-8 py-3 text-lg font-bold uppercase tracking-widest text-black group-active:text-opacity-75 bg-[#FEF08A] rounded-sm transform -rotate-1 group-hover:rotate-0 transition-transform">
                Explore Now
              </span>
            </button>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full order-2 md:order-2 perspective-1000 flex items-center justify-center">
            <div className="absolute top-10 left-4 md:left-10 bg-[#F5F5F4] p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-300 w-40 z-10 border border-gray-200 group">
              <div className="absolute z-30 drop-shadow-md -top-2 left-1/2 -translate-x-1/2 group-hover:animate-wiggle">
                <div className="w-4 h-4 rounded-full border-2 border-black/20 relative shadow-inner bg-red-500">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
                </div>
                <div className="w-0.5 h-3 bg-gray-400 mx-auto -mt-1 shadow-sm" />
              </div>
              <div className="font-marker text-2xl text-center mb-1">Shop</div>
              <div className="text-center font-handwriting text-gray-600">Textbooks</div>
            </div>

            <div className="absolute top-20 right-4 md:right-10 bg-black text-white p-4 shadow-xl transform rotate-3 hover:rotate-6 transition-all duration-300 w-40 z-20 group">
              <div className="absolute h-8 w-16 bg-white/20 backdrop-blur-[1px] shadow-sm z-20 -top-3 left-8 -rotate-3 washi-mask" />
              <div className="font-marker text-2xl text-center mb-1 text-yellow-400">Travel</div>
              <div className="text-center font-handwriting text-gray-300">Rideshare</div>
            </div>

            <div className="absolute bottom-32 left-2 md:left-12 bg-blue-600 text-white p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-all duration-300 w-40 z-30 group">
              <div className="w-3 h-3 rounded-full bg-white/50 mx-auto mb-2" />
              <div className="font-marker text-2xl text-center mb-1">Live</div>
              <div className="text-center font-handwriting text-blue-100">Housing</div>
            </div>

            <div className="absolute bottom-4 right-6 md:right-16 bg-[#FEF08A] p-4 shadow-xl transform -rotate-3 hover:rotate-3 transition-all duration-300 w-40 z-10 border-2 border-black group">
              <div className="font-marker text-2xl text-center mb-1">Party</div>
              <div className="text-center font-handwriting text-gray-800">Events</div>
            </div>
          </div>
        </div>
      </header>

      <div className="py-8 bg-[#171717] text-[#F5F5F4] relative z-20 overflow-hidden transform -skew-y-1 mb-12 border-y-4 border-[#D4A574]">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-8 text-center transform skew-y-1">
          <div className="flex flex-col items-center">
            <span className="font-marker text-4xl md:text-5xl text-[#FEF08A] drop-shadow-sm">250+</span>
            <span className="font-mono text-sm uppercase tracking-widest text-gray-400 mt-1">
              Active Students
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-marker text-4xl md:text-5xl text-[#FEF08A] drop-shadow-sm flex items-center gap-2">
              4.9 <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </span>
            <span className="font-mono text-sm uppercase tracking-widest text-gray-400 mt-1">
              Average Rating
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-marker text-4xl md:text-5xl text-[#FEF08A] drop-shadow-sm flex items-center gap-2">
              100% <ShieldCheck className="w-5 h-5 text-blue-400" />
            </span>
            <span className="font-mono text-sm uppercase tracking-widest text-gray-400 mt-1">
              .Edu Verified
            </span>
          </div>
        </div>
      </div>

      <section id="apps" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-marker text-blue-900 mb-4 transform -rotate-1 inline-block bg-white px-4 py-2 shadow-sm border border-gray-100">
              Everything You Need
            </h2>
            <p className="font-handwriting text-2xl text-gray-700">
              Four powerful apps, designed for your campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {apps.map((app, index) => (
              <div key={app.name} className="relative group">
                <div
                  className={`h-full bg-white p-8 shadow-xl border border-gray-200 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 ${
                    index % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(#000000 1px, transparent 1px)",
                      backgroundSize: "100% 28px",
                      marginTop: "30px"
                    }}
                  />
                  <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-red-300/50" />
                  <div
                    className={`absolute h-8 w-32 ${app.tapeClass} backdrop-blur-[1px] shadow-sm z-20 -top-3 left-1/2 -translate-x-1/2 washi-mask`}
                  />

                  <div className="relative z-10 pl-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-white/80 backdrop-blur p-2 rounded-lg shadow-sm border border-gray-100">
                        {app.icon}
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 transform rotate-2">
                        {app.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black font-marker mb-2 text-gray-800">{app.name}</h3>
                    <p className="font-handwriting text-2xl mb-6 text-gray-600 leading-8">{app.copy}</p>
                    <ul className="space-y-2">
                      {app.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 font-handwriting text-xl text-gray-700">
                          <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] text-blue-600">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200 group-hover:border-blue-200 transition-colors">
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors"
                      >
                        Visit {app.name} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,0 Q50,50 100,0 V100 H0 Z"
              fill="none"
              stroke="#2563EB"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <div className="max-w-4xl w-full mx-4 relative group cursor-pointer">
          <div className="bg-[#171717] text-[#F5F5F4] p-8 md:p-16 relative shadow-2xl transform transition-all duration-300 group-hover:scale-[1.02] -rotate-1 clip-ticket">
            <div className="absolute h-8 w-32 bg-yellow-400/40 backdrop-blur-[1px] shadow-sm z-20 -top-4 right-20 rotate-1 washi-mask" />
            <div className="absolute h-8 w-32 bg-blue-400/40 backdrop-blur-[1px] shadow-sm z-20 -bottom-4 left-20 -rotate-2 washi-mask" />

            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                TRANSFORM YOUR
                <br />
                <span className="text-[#FEF08A] font-marker">CAMPUS LIFE</span>
              </h2>
              <p className="font-mono text-gray-400 mb-8 max-w-xl mx-auto">
                Free .edu verified and all - Get started with our student-focused platform today.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-[#FEF08A] text-black px-8 py-4 font-bold text-lg rounded-sm shadow-lg hover:bg-white transition-colors transform hover:-translate-y-1">
                  Get Started
                </button>
                <div className="flex flex-col items-center md:items-start text-sm font-mono text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    No setup fees
                  </div>
                  <div>No credit card required</div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-2 items-center">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-bold text-white">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-[#F5F5F4] relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-handwriting text-xl bg-blue-100 px-3 py-1 rounded-full text-blue-800">
              Help Center
            </span>
            <h2 className="text-4xl font-black font-marker mt-4 text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-blue-200"
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-lg text-gray-800 font-handwriting">{item.question}</span>
                    <ChevronDown
                      className={`transform transition-transform duration-200 text-blue-600 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-0 overflow-hidden text-gray-600 font-sans leading-relaxed bg-blue-50/30 transition-height duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-6 pt-4 border-t border-gray-50">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#171717] text-white pt-16 pb-8 border-t-8 border-[#FEF08A]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-marker text-[#FEF08A] mb-4">Kampus.</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your campus, simplified. Making student life easier with trusted textbooks, furniture, rides, housing, and events.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/kampus.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                aria-label="Kampus on X"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/kampus.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group"
                aria-label="Kampus on Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/kampus-fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group"
                aria-label="Kampus on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest mb-4 text-gray-500 text-xs">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest mb-4 text-gray-500 text-xs">Apps</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {apps.map((app) => (
                <li key={app.name}>
                  <a href={app.href} className="hover:text-[#FEF08A]">
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest mb-4 text-gray-500 text-xs">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-mono">
          <p>&copy; 2025 Kampus. All rights reserved.</p>
          <p className="mt-2">
            Made with <Heart className="inline w-3 h-3 text-red-500 mx-1 fill-current align-baseline" /> for students.
          </p>
        </div>
      </footer>
    </div>
  );
}


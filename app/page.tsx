"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ─────────────────────────── NAV ─────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-purple-700 tracking-tight">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white text-sm">
            🧠
          </span>
          Learner AI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/features" className="nav-link">Features</Link>
          <Link href="/privacy" className="nav-link">Privacy</Link>
          <Link href="/terms" className="nav-link">Terms</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#download" className="btn-primary text-sm py-2.5 px-5">
            Download Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`hamburger-line ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-5 py-5 flex flex-col gap-4 shadow-xl">
          <Link href="/" className="font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/features" className="font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/privacy" className="font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          <Link href="/terms" className="font-semibold text-gray-700 hover:text-purple-700" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
          <a href="#download" className="btn-primary text-sm text-center" onClick={() => setMenuOpen(false)}>Download Free</a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="bg-blob w-96 h-96 bg-purple-300 top-[-80px] left-[-100px]" />
      <div className="bg-blob w-80 h-80 bg-violet-300 top-[200px] right-[-60px]" />
      <div className="bg-blob w-64 h-64 bg-indigo-200 bottom-0 left-[30%]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">
          {/* Left column */}
          <div className="flex-1 text-center lg:text-left">
            <div className="badge-pill mb-6 inline-flex">
              <span>✨</span>
              <span>AI-Powered Language Learning</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-gray-900">
              Learn. Speak.{" "}
              <span className="text-gradient-purple">Chat.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Master new languages with real AI conversation, pronunciation coaching, and a personalized learning journey — all in one app.
            </p>

            {/* CTA buttons */}
            <div id="download" className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#"
                id="app-store-btn"
                className="btn-primary text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.learn.language.speak.fluently"
                id="google-play-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.22 1.2.06l12.55-7.26-2.88-2.88-10.87 10.08zm-1.05-20.2A1.5 1.5 0 0 0 2 4.5v15c0 .46.2.88.52 1.18l.08.07L14.27 9l-.03-.03L2.13 3.56zm20.04 8.02-2.99-1.73-3.17 3.17 3.17 3.17 3.01-1.74a1.5 1.5 0 0 0 0-2.87zM4.38.18 16.93 7.44l-2.88 2.88L1.58.24C1.97.08 2.41.1 2.78.3l1.6-.12z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>

            {/* Supported languages */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["🇫🇷", "🇯🇵", "🇪🇸", "🇩🇪", "🇨🇳", "🇰🇷"].map((flag, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-violet-100 border-2 border-white flex items-center justify-center text-sm shadow-sm"
                  >
                    {flag}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Supporting <span className="text-purple-600 font-bold">50+ languages</span> and dialects
              </p>
            </div>
          </div>

          {/* Right column — mockup */}
          <div className="flex-1 relative flex items-center justify-center max-w-lg w-full">
            <div className="relative animate-float">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-purple-300 blur-3xl opacity-30 scale-110" />
              <Image
                src="/learner-ai-mockup.png"
                alt="Learner AI app screenshot showing AI chat interface"
                width={520}
                height={520}
                className="relative z-10"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(147,51,234,0.35))' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FEATURE HIGHLIGHTS ─────────────────────────── */
const highlights = [
  {
    icon: "💬",
    title: "AI Chat Practice",
    desc: "Have real conversations with an intelligent AI tutor that adapts to your level and corrects you naturally.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: "🎙️",
    title: "Speaking & Pronunciation",
    desc: "Get instant feedback on your accent and pronunciation with our advanced speech recognition engine.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🏆",
    title: "Learn at Your Own Pace",
    desc: "Bite-sized lessons designed around your schedule. Learn 10 minutes a day and see real progress.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: "📊",
    title: "Track Your Progress",
    desc: "Visualize streaks, vocabulary growth, and fluency scores with beautiful, motivating dashboards.",
    color: "from-fuchsia-500 to-pink-500",
  },
];

function FeaturesHighlight() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-label">What You Get</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="text-gradient-purple">go fluent</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Learner AI combines the best of modern AI with proven language-learning techniques.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="feature-card p-7">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/features" className="btn-secondary text-sm inline-flex">
            See all features →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */
const steps = [
  {
    number: "1",
    icon: "🌍",
    title: "Pick Your Language",
    desc: "Choose from 50+ languages — from Spanish to Japanese, French to Korean. Set your goal and level.",
  },
  {
    number: "2",
    icon: "🤖",
    title: "Chat with AI Tutor",
    desc: "Start conversing with your AI language partner. It corrects mistakes, teaches vocabulary, and keeps you engaged.",
  },
  {
    number: "3",
    icon: "🚀",
    title: "Track & Improve",
    desc: "Watch your fluency grow daily with progress reports, streaks, and personalized recommendations.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-br from-purple-50 to-violet-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="section-label">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How <span className="text-gradient-purple">Learner AI</span> works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From zero to conversational in three simple steps.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-purple-200 via-violet-300 to-purple-200 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex-1 flex flex-col items-center text-center">
              <div className="step-number mb-5">{step.number}</div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MOCKUP SECTION ─────────────────────────── */
function MockupSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="section-label">Experience it</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Your AI tutor,{" "}
              <span className="text-gradient-purple">available 24/7</span>
            </h2>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              No scheduling, no waiting. Chat in any language, anytime — your personal AI language coach is always ready.
            </p>
            <ul className="space-y-3 text-left inline-block">
              {[
                "Real-time AI conversation in 50+ languages",
                "Instant pronunciation scoring & feedback",
                "Daily vocabulary and grammar exercises",
                "Streak tracking to keep you motivated",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 justify-center lg:justify-start">
              <a href="#" className="btn-primary">Download Free</a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center max-w-md w-full">
            <div className="relative">
              <Image
                src="/learner-ai-mockup.png"
                alt="Learner AI app on mobile showing language chat"
                width={440}
                height={440}
                className="relative z-10"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(147,51,234,0.3))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
const stats = [
  { value: "50+", label: "Languages" },
  { value: "50K+", label: "Active Learners" },
  { value: "24/7", label: "AI Tutor Support" },
  { value: "10M+", label: "Conversations" },
];

function Stats() {
  return (
    <section className="py-14 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-purple-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────── CTA BANNER ─────────────────────────── */
function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="text-5xl mb-5">🚀</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Start speaking{" "}
          <span className="text-gradient-purple">your new language</span> today
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Join 50,000+ learners who are already on their way to fluency. Free to download.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" id="cta-app-store" className="btn-primary text-base">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.learn.language.speak.fluently" id="cta-google-play" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.37.2.8.22 1.2.06l12.55-7.26-2.88-2.88-10.87 10.08zm-1.05-20.2A1.5 1.5 0 0 0 2 4.5v15c0 .46.2.88.52 1.18l.08.07L14.27 9l-.03-.03L2.13 3.56zm20.04 8.02-2.99-1.73-3.17 3.17 3.17 3.17 3.01-1.74a1.5 1.5 0 0 0 0-2.87zM4.38.18 16.93 7.44l-2.88 2.88L1.58.24C1.97.08 2.41.1 2.78.3l1.6-.12z"/>
            </svg>
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-2 justify-center md:justify-start">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-sm">
                🧠
              </span>
              Learner AI
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-powered language learning. Learn, speak, and chat your way to fluency.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left">
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">Navigation</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link href="/features" className="hover:text-purple-400 transition-colors">Features</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">Legal</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">Contact</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@learnerai.app" className="hover:text-purple-400 transition-colors">
                    support@learnerai.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)" }} />

        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Learner AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesHighlight />
        <HowItWorks />
        <MockupSection />
        <Stats />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

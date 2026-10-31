"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface FAQItem {
  id: string;
  category: "general" | "ai" | "privacy" | "troubleshooting";
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "what-is-learner-ai",
    category: "general",
    question: "What is Learner AI and how does it work?",
    answer:
      "Learner AI is an intelligent language learning companion powered by real-time conversational AI (including Google Gemini). Unlike rigid flashcard apps, Learner AI allows you to practice realistic dialogues, receive instant pronunciation feedback, and expand your vocabulary through adaptive context tailored to your fluency level.",
  },
  {
    id: "contact-support",
    category: "general",
    question: "How do I contact support or reach the developer?",
    answer:
      "You can contact our support directly via email at ganeshglive@gmail.com. We answer all inquiries regarding technical issues, feature requests, account help, and feedback, typically within 24 to 48 hours.",
  },
  {
    id: "pricing-free-tier",
    category: "general",
    question: "Is Learner AI free to use?",
    answer:
      "Yes! Learner AI is free to download on mobile devices. You get access to essential lessons, conversational speaking sessions, and vocabulary builders at no charge. An optional Premium upgrade is available for unlimited AI dialogue turns, advanced accent coaching, and full offline study access.",
  },
  {
    id: "pronunciation-coaching",
    category: "ai",
    question: "How does the AI pronunciation coaching work?",
    answer:
      "When you speak into the microphone, our speech recognition system evaluates your phoneme accuracy in real time. It highlights accurately pronounced words in green and provides syllable-by-syllable breakdowns for any mispronounced words so you can practice until you sound like a native speaker.",
  },
  {
    id: "supported-languages",
    category: "general",
    question: "Which languages can I learn?",
    answer:
      "Learner AI supports over 50 languages, including Spanish, French, German, Mandarin Chinese, Japanese, Korean, Italian, Portuguese, Russian, Hindi, Arabic, Dutch, Turkish, Swedish, Polish, and more. Each language comes with authentic native-sounding AI voices.",
  },
  {
    id: "data-privacy",
    category: "privacy",
    question: "Is my personal data or voice audio stored on servers?",
    answer:
      "No. We prioritize your privacy. All your lesson progress, streak counters, custom vocabulary, and conversation histories are stored directly on your phone's local device storage. Audio recordings are processed in real-time for speech feedback and are never permanently recorded or sold.",
  },
  {
    id: "offline-mode",
    category: "troubleshooting",
    question: "Can I use Learner AI offline?",
    answer:
      "Yes, for offline lessons, flashcards, and stored vocabulary decks. However, real-time dynamic AI chat and pronunciation coaching require an active internet connection to communicate securely with the AI engine.",
  },
  {
    id: "mic-troubleshooting",
    category: "troubleshooting",
    question: "The microphone isn't detecting my voice. What should I do?",
    answer:
      "Please verify that Learner AI has microphone permission enabled in your phone settings (Settings > Apps > Learner AI > Permissions > Microphone). Ensure your microphone isn't being held by a background calling app, and test in an environment with minimal background noise. If the issue continues, reach out to ganeshglive@gmail.com with your device model.",
  },
  {
    id: "backup-progress",
    category: "privacy",
    question: "How do I backup or transfer my learning progress?",
    answer:
      "Because progress data is kept on your device storage for privacy, you can use the in-app 'Export Progress' feature found in Settings to save a local backup or restore it on a new device. If you need manual recovery assistance, feel free to email ganeshglive@gmail.com.",
  },
  {
    id: "feature-requests",
    category: "general",
    question: "Can I suggest a new language or feature?",
    answer:
      "Absolutely! We love hearing from our community. Send your ideas, requested languages, or improvement suggestions directly to ganeshglive@gmail.com with the subject 'Feature Request'.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Questions" },
  { key: "general", label: "General & Getting Started" },
  { key: "ai", label: "AI & Speech Practice" },
  { key: "privacy", label: "Data & Privacy" },
  { key: "troubleshooting", label: "Troubleshooting" },
] as const;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-xl text-purple-700 tracking-tight"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white text-sm shadow-md">
            🧠
          </span>
          Learner AI
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/features" className="nav-link">
            Features
          </Link>
          <Link
            href="/support"
            className="nav-link text-purple-700 font-bold"
            style={{ color: "#9333ea" }}
          >
            Support
          </Link>
          <Link href="/privacy" className="nav-link">
            Privacy
          </Link>
          <Link href="/terms" className="nav-link">
            Terms
          </Link>
        </div>
        <Link
          href="/#download"
          className="btn-primary text-sm py-2.5 px-5 hidden md:inline-flex"
        >
          Download Free
        </Link>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`hamburger-line ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span className={`hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`hamburger-line ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 px-5 py-5 flex flex-col gap-4 shadow-xl">
          <Link
            href="/"
            className="font-semibold text-gray-700 hover:text-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/features"
            className="font-semibold text-gray-700 hover:text-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/support"
            className="font-bold text-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            Support & FAQ
          </Link>
          <Link
            href="/privacy"
            className="font-semibold text-gray-700 hover:text-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-semibold text-gray-700 hover:text-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/#download"
            className="btn-primary text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download Free
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-extrabold text-xl text-white mb-2 justify-center md:justify-start"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-sm">
                🧠
              </span>
              Learner AI
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-powered language learning. Learn, speak, and chat your way to
              fluency.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left">
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">
                Navigation
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-purple-400 transition-colors font-medium text-purple-400"
                  >
                    Support & FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">
                Legal
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-widest">
                Support
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:ganeshglive@gmail.com"
                    className="text-purple-400 hover:underline font-medium break-all"
                  >
                    ganeshglive@gmail.com
                  </a>
                </li>
                <li className="text-xs text-gray-500 mt-1">
                  Average response: within 24h
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="divider mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
          }}
        />

        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Learner AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "what-is-learner-ai": true,
    "contact-support": true,
  });
  const [copied, setCopied] = useState(false);

  // Quick message builder state
  const [formName, setFormName] = useState("");
  const [formSubject, setFormSubject] = useState("Question");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ganeshglive@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:ganeshglive@gmail.com?subject=${encodeURIComponent(
      `Learner AI Support: [${formSubject}] from ${formName || "Learner"}`
    )}&body=${encodeURIComponent(
      `Hello Learner AI Team,\n\n${formMessage}\n\nBest regards,\n${
        formName || "Learner"
      }`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50 overflow-hidden">
          <div className="bg-blob w-96 h-96 bg-purple-200 top-[-100px] left-[-80px]" />
          <div className="bg-blob w-80 h-80 bg-violet-200 bottom-[-50px] right-[-60px]" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <div className="badge-pill mb-5 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Learner AI Help &amp; Support Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-5 leading-tight">
              How can we <span className="text-gradient-purple">help you</span>{" "}
              today?
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Find quick answers to common questions, get technical assistance,
              or reach out directly to our dedicated support email.
            </p>

            {/* Direct Email Highlight Card */}
            <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md border-2 border-purple-200/80 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl">
                  ✉️
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-purple-700">
                  Direct Support Email
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-4">
                <a
                  href="mailto:ganeshglive@gmail.com"
                  className="text-xl sm:text-2xl font-extrabold text-purple-900 hover:text-purple-600 transition-colors tracking-tight underline decoration-purple-300 underline-offset-4 break-all"
                  id="support-gmail-link"
                >
                  ganeshglive@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors"
                  aria-label="Copy support email address"
                >
                  {copied ? (
                    <>
                      <span className="text-green-600">✓</span> Copied!
                    </>
                  ) : (
                    <>
                      <span>📋</span> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 pt-3 border-t border-purple-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Fast turnaround: typically within 24 hours
                </span>
                <span>•</span>
                <span>Direct developer support</span>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="mailto:ganeshglive@gmail.com"
                  className="btn-primary text-sm py-2.5 px-6"
                  id="email-cta-btn"
                >
                  <span>✉️</span> Compose Email
                </a>
                <a
                  href="#faq-section"
                  className="btn-secondary text-sm py-2.5 px-6"
                >
                  <span>🔍</span> Browse FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Support Channel Cards */}
        <section className="py-14 bg-white border-y border-purple-100/60">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10">
              <p className="section-label">Ways to Connect</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Choose the best way to reach us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: General Help */}
              <div className="card-elevated p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl mb-4">
                    💬
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    General Inquiries &amp; Help
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Have questions about setting up the app, conversational AI
                    tutors, or need guidance on lesson progression?
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:ganeshglive@gmail.com?subject=Learner%20AI%20General%20Inquiry"
                    className="text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group"
                  >
                    Email ganeshglive@gmail.com
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Card 2: Bug Reports */}
              <div className="card-elevated p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center text-2xl mb-4">
                    🐛
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Bug Reports &amp; Tech Issues
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Found an unexpected glitch, microphone issue, or layout bug?
                    Please share your device model and OS version so we can fix
                    it immediately.
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:ganeshglive@gmail.com?subject=Learner%20AI%20Bug%20Report"
                    className="text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group"
                  >
                    Report a Bug
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Card 3: Feature Suggestions */}
              <div className="card-elevated p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-2xl mb-4">
                    💡
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Feature Requests &amp; Feedback
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Want support for a specific dialect, custom practice
                    scenario, or have ideas to improve Learner AI? We build
                    based on your requests.
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:ganeshglive@gmail.com?subject=Learner%20AI%20Feature%20Request"
                    className="text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group"
                  >
                    Suggest a Feature
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-16 md:py-24 bg-purple-50/40">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10">
              <div className="badge-pill mb-3 inline-flex">
                <span>❓</span>
                <span>Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base max-w-xl mx-auto">
                Everything you need to know about Learner AI, conversational
                practice, and technical support.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative mb-8 max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-purple-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., Gemini, speech, offline, privacy)..."
                className="w-full pl-11 pr-10 py-3.5 bg-white rounded-xl border border-purple-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 text-sm font-semibold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-purple-700 text-white shadow-md scale-105"
                        : "bg-white text-gray-700 border border-purple-200/70 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = !!openItems[faq.id];
                  return (
                    <div
                      key={faq.id}
                      className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden transition-all duration-200 hover:border-purple-300"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-purple-700 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg leading-snug">
                          {faq.question}
                        </span>
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                            isOpen
                              ? "bg-purple-100 text-purple-700 rotate-180"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-purple-50 pt-4">
                          <p>{faq.answer}</p>
                          {faq.answer.includes("ganeshglive@gmail.com") && (
                            <div className="mt-3">
                              <a
                                href="mailto:ganeshglive@gmail.com"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200"
                              >
                                ✉️ Email ganeshglive@gmail.com
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl border border-purple-100 p-8">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    No matching questions found
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Can&apos;t find what you&apos;re looking for? Reach out
                    directly to our support inbox.
                  </p>
                  <a
                    href="mailto:ganeshglive@gmail.com"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    Email ganeshglive@gmail.com
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Message / Contact Form Section */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="card-elevated p-8 sm:p-10 border-purple-200">
              <div className="text-center mb-8">
                <div className="badge-pill mb-3 inline-flex">
                  <span>📬</span>
                  <span>Direct Message Form</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  Send a message to our support
                </h2>
                <p className="text-sm text-gray-500">
                  Fill in the details below to launch a pre-formatted email to{" "}
                  <strong className="text-purple-700">ganeshglive@gmail.com</strong>.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50/20"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Pronunciation & AI Practice">
                        Pronunciation &amp; AI Practice
                      </option>
                      <option value="Privacy / Data Request">
                        Privacy / Data Request
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    How can we help? (Message)
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your issue, feature idea, or question in detail..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50/20"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span>🔒</span>
                    <span>Direct email: ganeshglive@gmail.com</span>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto text-sm py-3 px-8"
                  >
                    <span>🚀</span> Open Email Client
                  </button>
                </div>

                {formSent && (
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs sm:text-sm text-center">
                    If your email client didn&apos;t open automatically, please send
                    your email directly to{" "}
                    <a
                      href="mailto:ganeshglive@gmail.com"
                      className="font-bold underline text-purple-700"
                    >
                      ganeshglive@gmail.com
                    </a>
                    .
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-900 via-purple-950 to-indigo-950 text-white text-center relative overflow-hidden">
          <div className="bg-blob w-80 h-80 bg-purple-500 top-[-80px] left-[-60px] opacity-20" />
          <div className="bg-blob w-72 h-72 bg-violet-400 bottom-[-60px] right-[-40px] opacity-20" />

          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to master a new language?
            </h2>
            <p className="text-purple-200 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Start practicing real conversations today with Learner AI on Android
              and iOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#download"
                className="btn-primary bg-white text-purple-900 hover:bg-purple-50 shadow-lg text-sm py-3 px-6"
              >
                Download Free
              </Link>
              <a
                href="mailto:ganeshglive@gmail.com"
                className="btn-secondary bg-transparent text-white border-purple-400/50 hover:bg-white/10 hover:border-purple-300 text-sm py-3 px-6"
              >
                Contact Developer
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

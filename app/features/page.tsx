import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Learner AI",
  description:
    "Explore all the features of Learner AI: AI chat practice, pronunciation coaching, vocabulary building, progress tracking, and more.",
};

const allFeatures = [
  {
    icon: "💬",
    title: "AI Chat Practice",
    desc: "Engage in natural, flowing conversations with your AI language tutor. It adapts to your proficiency level, corrects mistakes in context, and introduces new vocabulary organically — just like a real conversation partner.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: "🎙️",
    title: "Speaking & Pronunciation",
    desc: "Our advanced speech recognition engine analyzes your pronunciation in real-time, scoring your accuracy and offering targeted corrections. Train your ear and your tongue simultaneously.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "⏱️",
    title: "Learn at Your Own Pace",
    desc: "No rigid schedules. Choose micro-lessons of 5, 10, or 20 minutes per day. Our AI optimizes lesson content based on your availability and learning velocity.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: "📊",
    title: "Track Your Progress",
    desc: "Beautiful dashboards show your daily streak, vocabulary count, grammar accuracy over time, and fluency score. Visualize how far you've come and what to focus on next.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: "🌍",
    title: "50+ Languages",
    desc: "From widely spoken languages like Spanish, French, and Mandarin, to niche picks like Finnish, Swahili, and Hungarian — Learner AI has you covered with native-quality AI voices.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "🧠",
    title: "Smart Vocabulary Builder",
    desc: "Our spaced repetition algorithm ensures you review words exactly when you're about to forget them. Build a lasting vocabulary bank that grows with every session.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "🔥",
    title: "Daily Streaks & Goals",
    desc: "Set daily goals and earn streak rewards for consistent practice. Gamification keeps you coming back and makes the habit stick long-term.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: "🎯",
    title: "Personalized Learning Path",
    desc: "Take a short placement test and Learner AI builds a custom curriculum tailored to your goals — whether you're a traveler, student, or professional learner.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "📝",
    title: "Grammar Deep-Dives",
    desc: "Go beyond surface-level learning with in-depth grammar explanations and interactive exercises. Understand the 'why' behind every rule.",
    color: "from-lime-500 to-green-500",
  },
  {
    icon: "🔊",
    title: "Native Audio & Accents",
    desc: "Hear your target language spoken by authentic AI voices trained on native speakers — multiple regional accents included for a fully immersive experience.",
    color: "from-sky-400 to-indigo-500",
  },
  {
    icon: "📴",
    title: "Offline Mode",
    desc: "No internet? No problem. Download lessons and continue practicing on a plane, subway, or anywhere without a connection.",
    color: "from-slate-400 to-slate-600",
  },
  {
    icon: "🔒",
    title: "Private & Secure",
    desc: "Your conversation data and learning history are encrypted and never sold. We take your privacy seriously — read our full Privacy Policy to learn more.",
    color: "from-purple-600 to-purple-800",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-purple-700 tracking-tight">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-white text-sm">
            🧠
          </span>
          Learner AI
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/features" className="nav-link" style={{ color: "#9333ea" }}>Features</Link>
          <Link href="/privacy" className="nav-link">Privacy</Link>
          <Link href="/terms" className="nav-link">Terms</Link>
        </div>
        <a href="/#download" className="btn-primary text-sm py-2.5 px-5 hidden md:inline-flex">
          Download Free
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-lg text-white mb-4 justify-center">
          <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center text-sm">🧠</span>
          Learner AI
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/features" className="hover:text-purple-400 transition-colors">Features</Link>
          <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</Link>
        </div>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Learner AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-purple-50 via-white to-violet-50 text-center relative overflow-hidden">
          <div className="bg-blob w-96 h-96 bg-purple-200 top-[-120px] left-[-80px]" />
          <div className="bg-blob w-64 h-64 bg-violet-200 bottom-[-60px] right-[-40px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
            <div className="badge-pill mb-6 inline-flex">
              <span>⚡</span>
              <span>Full Feature Set</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
              Everything inside{" "}
              <span className="text-gradient-purple">Learner AI</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A comprehensive toolkit designed to take you from complete beginner to confident speaker — powered by cutting-edge AI.
            </p>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {allFeatures.map((f, i) => (
                <div key={i} id={`feature-${i + 1}`} className="feature-card p-7 group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {f.icon}
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 text-center text-white">
          <div className="max-w-2xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl font-extrabold mb-4">Ready to start learning?</h2>
            <p className="text-purple-200 mb-8 text-lg">Download Learner AI for free and unlock all features today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" id="features-app-store-btn" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold py-3 px-7 rounded-2xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.learn.language.speak.fluently" id="features-google-play-btn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-purple-800/50 border border-white/30 text-white font-bold py-3 px-7 rounded-2xl hover:bg-purple-800 transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.22 1.2.06l12.55-7.26-2.88-2.88-10.87 10.08zm-1.05-20.2A1.5 1.5 0 0 0 2 4.5v15c0 .46.2.88.52 1.18l.08.07L14.27 9l-.03-.03L2.13 3.56zm20.04 8.02-2.99-1.73-3.17 3.17 3.17 3.17 3.01-1.74a1.5 1.5 0 0 0 0-2.87zM4.38.18 16.93 7.44l-2.88 2.88L1.58.24C1.97.08 2.41.1 2.78.3l1.6-.12z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

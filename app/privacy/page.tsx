import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Learner AI",
  description:
    "Read the Learner AI Privacy Policy to understand how we collect, use, and protect your personal data.",
};

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
          <Link href="/features" className="nav-link">Features</Link>
          <Link href="/privacy" className="nav-link" style={{ color: "#9333ea" }}>Privacy</Link>
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
          <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms &amp; Conditions</Link>
        </div>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Learner AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-violet-50 text-center relative overflow-hidden">
          <div className="bg-blob w-72 h-72 bg-purple-200 top-[-80px] left-[-60px]" />
          <div className="bg-blob w-56 h-56 bg-violet-200 bottom-[-40px] right-[-30px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
            <div className="badge-pill mb-5 inline-flex">
              <span>🔒</span>
              <span>Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Privacy <span className="text-gradient-purple">Policy</span>
            </h1>
            <p className="text-gray-500 text-base">
              Last updated: <strong>June 26, 2025</strong>
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            {/* TOC */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-12">
              <p className="font-bold text-purple-800 mb-3 text-sm uppercase tracking-widest">Contents</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  ["#information-we-collect", "1. Information We Collect"],
                  ["#how-we-use", "2. How We Use Your Information"],
                  ["#sharing", "3. Sharing of Information"],
                  ["#data-retention", "4. Data Retention"],
                  ["#your-rights", "5. Your Rights"],
                  ["#security", "6. Security"],
                  ["#children", "7. Children's Privacy"],
                  ["#changes", "8. Changes to This Policy"],
                  ["#contact", "9. Contact Us"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-purple-600 hover:text-purple-800 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose-policy">
              <p>
                Welcome to <strong>Learner AI</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p>
                Please read this policy carefully. If you disagree with its terms, please discontinue use of our Service.
              </p>

              {/* Section 1 */}
              <h2 id="information-we-collect">1. Information We Collect</h2>
              <h3>1.1 Information You Provide Directly</h3>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, and password when you register.</li>
                <li><strong>Profile Data:</strong> Native language, target languages, learning goals, and proficiency level.</li>
                <li><strong>Voice Data:</strong> Audio recordings you submit for pronunciation practice (processed locally or on-device where possible).</li>
                <li><strong>Communications:</strong> Messages sent to our support team.</li>
              </ul>

              <h3>1.2 Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage Data:</strong> Lessons completed, streak counts, session duration, vocabulary progress.</li>
                <li><strong>Device Information:</strong> Device type, operating system version, app version, unique device identifiers.</li>
                <li><strong>Log Data:</strong> IP address, access times, pages viewed, and referring URLs.</li>
                <li><strong>Crash Reports:</strong> Anonymized crash logs to help us improve app stability.</li>
              </ul>

              <h3>1.3 Information from Third Parties</h3>
              <p>
                If you sign in via a third-party provider (e.g., Apple Sign-In, Google), we receive basic profile information such as your name and email address, subject to that provider&apos;s privacy policy.
              </p>

              {/* Section 2 */}
              <h2 id="how-we-use">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Create and manage your account and learning profile.</li>
                <li>Personalize your language learning curriculum and AI tutor interactions.</li>
                <li>Analyze pronunciation and provide real-time feedback.</li>
                <li>Track your progress and generate insights on your dashboards.</li>
                <li>Send transactional notifications (e.g., streak reminders, lesson completions).</li>
                <li>Improve our AI models, app features, and overall user experience.</li>
                <li>Ensure the security and integrity of the Service.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal data to third parties for their marketing purposes.
              </p>

              {/* Section 3 */}
              <h2 id="sharing">3. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating the Service (e.g., cloud hosting, analytics, payment processing). These providers are contractually obligated to protect your data.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy.</li>
                <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent.</li>
              </ul>

              {/* Section 4 */}
              <h2 id="data-retention">4. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as necessary to provide the Service. If you delete your account, we will delete or anonymize your data within <strong>30 days</strong>, except where we are required by law to retain it longer.
              </p>
              <p>
                Voice recordings used for pronunciation feedback are processed in real-time and are not stored on our servers beyond the immediate analysis, unless you explicitly opt in to contribute to model improvement.
              </p>

              {/* Section 5 */}
              <h2 id="your-rights">5. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten").</li>
                <li><strong>Portability:</strong> Request a machine-readable export of your data.</li>
                <li><strong>Objection:</strong> Object to certain processing activities, such as direct marketing.</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:privacy@learnerai.app">privacy@learnerai.app</a>.
                We will respond within 30 days.
              </p>

              {/* Section 6 */}
              <h2 id="security">6. Security</h2>
              <p>
                We implement industry-standard security measures including TLS encryption for data in transit and AES-256 encryption for data at rest. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password for your account.
              </p>
              <p>
                In the event of a data breach that affects your personal information, we will notify you as required by applicable law.
              </p>

              {/* Section 7 */}
              <h2 id="children">7. Children&apos;s Privacy</h2>
              <p>
                Learner AI is intended for users aged <strong>13 and older</strong>. We do not knowingly collect personal information from children under 13 (or under 16 in the European Economic Area). If we become aware that we have inadvertently collected data from a child below the applicable age, we will delete it promptly. If you believe we have collected data from a minor, please contact us immediately.
              </p>

              {/* Section 8 */}
              <h2 id="changes">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy in-app and updating the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Service after changes become effective constitutes your acceptance of the new policy.
              </p>

              {/* Section 9 */}
              <h2 id="contact">9. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:privacy@learnerai.app">privacy@learnerai.app</a></li>
                <li><strong>Support:</strong> <a href="mailto:support@learnerai.app">support@learnerai.app</a></li>
                <li><strong>Website:</strong> <a href="https://learnerai.app">learnerai.app</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

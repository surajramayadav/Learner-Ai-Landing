import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Learner AI",
  description:
    "Read the Learner AI Privacy Policy to understand how we collect, use, and safeguard your data.",
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
              Last updated: <strong>June 26, 2026</strong>
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            {/* TOC */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-12">
              <p className="font-bold text-purple-800 mb-3 text-sm uppercase tracking-widest">Contents</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                {[
                  ["#introduction", "1. Introduction"],
                  ["#data-we-collect", "2. Data We Collect"],
                  ["#legal-basis", "3. Legal Basis for Data Processing"],
                  ["#data-security", "4. Data Security"],
                  ["#third-party-services", "5. Third-Party Services"],
                  ["#your-rights", "6. Your Rights Under Data Protection Laws"],
                  ["#childrens-privacy", "7. Children's Privacy"],
                  ["#data-retention", "8. Data Retention & Storage"],
                  ["#cross-border-transfers", "9. Cross-Border Data Transfers"],
                  ["#cookies", "10. Cookies & Tracking Technologies"],
                  ["#changes", "11. Changes to This Policy"],
                  ["#contact", "12. Contact Us"],
                ].map(([href, label]) => (
                  <div key={href}>
                    <a href={href} className="text-purple-600 hover:text-purple-800 transition-colors">
                      {label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose-policy">
              {/* Section 1 */}
              <h2 id="introduction">1. Introduction</h2>
              <p>
                This Privacy Policy outlines how Learner AI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and safeguards your data when you use our language learning application and AI chat services. We are dedicated to upholding your privacy rights and adhering to global data protection standards, including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and equivalent laws in other jurisdictions.
              </p>

              {/* Section 2 */}
              <h2 id="data-we-collect">2. Data We Collect</h2>
              <p>
                We prioritize minimizing data collection and only gather information necessary to operate and improve our language learning service. <strong>To maximize your privacy, all user settings, lesson progress, vocabulary banks, and AI chat logs are stored directly on your phone&apos;s local storage.</strong>
              </p>
              <ul>
                <li><strong>Account &amp; Profile Information:</strong> We do not require or collect personal information such as full names, phone numbers, or payment details. If you register an account, we may store your email and learning preferences.</li>
                <li><strong>Voice Data:</strong> Audio recordings you submit for pronunciation practice are processed in real-time. We do not store or analyze your voice data on our servers; it is processed locally on-device where possible.</li>
                <li><strong>Log &amp; Technical Info:</strong> We may collect device type, operating system (e.g., iOS, Android), app version, and technical specifications (excluding unique device identifiers).</li>
                <li><strong>Aggregated Performance Data:</strong> Anonymized crash logs and app metrics to help us maintain app stability. This data cannot be linked back to your identity.</li>
              </ul>

              {/* Section 3 */}
              <h2 id="legal-basis">3. Legal Basis for Data Processing</h2>
              <p>We process data only where legally permissible and necessary for service delivery:</p>
              <ul>
                <li><strong>Legitimate Interests:</strong> Optimizing service performance, enhancing security, and detecting abuse.</li>
                <li><strong>Contractual Necessity:</strong> Fulfilling our obligations to provide the AI tutor and language lessons you requested.</li>
                <li><strong>Legal Compliance:</strong> Responding to valid legal requests (e.g., court orders) in accordance with applicable laws, after verifying their lawfulness.</li>
              </ul>

              {/* Section 4 */}
              <h2 id="data-security">4. Data Security</h2>
              <p>
                Since all user settings, lesson progress, and chat history are stored locally on your device&apos;s phone localstorage and not on our servers, we do not require or maintain server-side databases. Your data is protected directly by your device&apos;s native operating system security and permissions.
              </p>
              <ul>
                <li><strong>Local Device Security:</strong> We encourage you to secure your phone using passcode, biometric authentication, or encryption built into your mobile OS.</li>
                <li><strong>Data in Transit:</strong> Any communication between your app and third-party APIs (such as the Gemini API) is transmitted securely using standard HTTPS encryption.</li>
              </ul>

              {/* Section 5 */}
              <h2 id="third-party-services">5. Third-Party Services</h2>
              <p>
                To provide specific in-app features, we integrate with trusted third-party providers. Specifically, <strong>we use the Google Gemini API as an AI agent</strong> to power the conversational practice and tutor logic.
              </p>
              <ul>
                <li><strong>Gemini API:</strong> Your chat messages and prompts are sent to Google Gemini for real-time response generation. This data is handled in accordance with Google&apos;s developer terms and is not permanently saved or stored by us.</li>
                <li><strong>Service Providers:</strong> Any secondary support systems (such as anonymized error tracking or app analytics) do not access or store personal details.</li>
              </ul>

              {/* Section 6 */}
              <h2 id="your-rights">6. Your Rights Under Data Protection Laws</h2>
              <p>
                Under regulations like the GDPR and CCPA, you have the right to access, correct, delete, or port your data, and to withdraw consent at any time. To exercise these rights, contact us at <a href="mailto:ganeshglive@gmail.com">ganeshglive@gmail.com</a> within 30 days.
              </p>

              {/* Section 7 */}
              <h2 id="childrens-privacy">7. Children&apos;s Privacy</h2>
              <p>
                Learner AI is not intended for users under the age of 13. We do not knowingly collect data from children. If you believe we have inadvertently collected data from a child, please contact us immediately for deletion.
              </p>

              {/* Section 8 */}
              <h2 id="data-retention">8. Data Retention & Storage</h2>
              <p>
                Temporary technical and diagnostic data is automatically deleted within 30 days of collection, unless retention is required by law. We do not store any user data beyond the minimum period necessary to provide and improve our service.
              </p>
              <p>
                <strong>Important: All user configurations, settings, and progress data are stored locally on your device&apos;s phone localstorage.</strong> We do not store any user data on our external servers. You can erase this data at any time by clearing your browser cache/storage or device application data.
              </p>

              {/* Section 9 */}
              <h2 id="cross-border-transfers">9. Cross-Border Data Transfers</h2>
              <p>
                Your data may be processed in countries outside your region as part of our global infrastructure. We rely on GDPR-approved mechanisms (e.g., Standard Contractual Clauses) or equivalent safeguards for cross-border transfers.
              </p>

              {/* Section 10 */}
              <h2 id="cookies">10. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies only for essential purposes such as session management and anonymized service performance analytics. You can disable non-essential cookies via your browser settings.
              </p>

              {/* Section 11 */}
              <h2 id="changes">11. Changes to This Policy</h2>
              <p>
                We may update this policy to reflect legal changes or service improvements. Revisions will be posted with the &ldquo;Last Updated&rdquo; date. Continued use of our service after changes constitutes your acceptance of the updated policy.
              </p>

              {/* Section 12 */}
              <h2 id="contact">12. Contact Us</h2>
              <p>For any questions regarding this Privacy Policy, please contact us at:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:ganeshglive@gmail.com">ganeshglive@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

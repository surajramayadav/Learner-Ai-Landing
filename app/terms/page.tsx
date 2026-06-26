import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Learner AI",
  description:
    "Read the Learner AI Terms and Conditions to understand the rules governing your use of the app and website.",
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
          <Link href="/privacy" className="nav-link">Privacy</Link>
          <Link href="/terms" className="nav-link" style={{ color: "#9333ea" }}>Terms</Link>
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

export default function TermsPage() {
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
              <span>📋</span>
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Terms &amp; <span className="text-gradient-purple">Conditions</span>
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
                  ["#acceptance", "1. Acceptance of Terms"],
                  ["#eligibility", "2. User Eligibility"],
                  ["#account", "3. Account Registration"],
                  ["#acceptable-use", "4. Acceptable Use Policy"],
                  ["#intellectual-property", "5. Intellectual Property"],
                  ["#subscriptions", "6. Subscriptions & Payments"],
                  ["#disclaimers", "7. Disclaimers & No Warranties"],
                  ["#liability", "8. Limitation of Liability"],
                  ["#indemnification", "9. Indemnification"],
                  ["#governing-law", "10. Governing Law"],
                  ["#termination", "11. Termination"],
                  ["#changes", "12. Changes to These Terms"],
                  ["#contact", "13. Contact Us"],
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
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the <strong>Learner AI</strong> mobile application and website (collectively, the &ldquo;Service&rdquo;) operated by Learner AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Please read these Terms carefully before using our Service.
              </p>

              {/* Section 1 */}
              <h2 id="acceptance">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using Learner AI, you agree to be bound by these Terms and our{" "}
                <Link href="/privacy">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Service.
              </p>

              {/* Section 2 */}
              <h2 id="eligibility">2. User Eligibility</h2>
              <p>
                You must be at least <strong>13 years of age</strong> to use Learner AI. By using the Service, you represent and warrant that:
              </p>
              <ul>
                <li>You are at least 13 years old (or 16 in the European Economic Area).</li>
                <li>If you are between 13 and 18 (or the age of majority in your jurisdiction), you have obtained parental or guardian consent.</li>
                <li>You have the legal capacity to enter into a binding agreement.</li>
                <li>You are not prohibited from receiving services under applicable laws.</li>
              </ul>
              <p>
                We reserve the right to terminate accounts of users who we discover are underage without prior notice.
              </p>

              {/* Section 3 */}
              <h2 id="account">3. Account Registration</h2>
              <p>To access certain features, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete registration information.</li>
                <li>Keep your password confidential and not share it with others.</li>
                <li>Notify us immediately at <a href="mailto:support@learnerai.app">support@learnerai.app</a> if you suspect unauthorized access to your account.</li>
                <li>Accept responsibility for all activities that occur under your account.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that contain false information or violate these Terms.
              </p>

              {/* Section 4 */}
              <h2 id="acceptable-use">4. Acceptable Use Policy</h2>
              <p>You agree to use Learner AI only for lawful purposes. You must <strong>not</strong>:</p>
              <ul>
                <li>Use the Service to harass, abuse, threaten, or harm any person.</li>
                <li>Attempt to gain unauthorized access to any part of the Service or its systems.</li>
                <li>Reverse engineer, decompile, or disassemble the app or any component of the Service.</li>
                <li>Scrape, crawl, or extract data from the Service without our express written permission.</li>
                <li>Submit false, misleading, or fraudulent information.</li>
                <li>Upload viruses, malware, or other harmful code.</li>
                <li>Use automated bots or scripts to interact with the Service.</li>
                <li>Circumvent any subscription or payment mechanisms.</li>
                <li>Use the Service for commercial purposes without our prior written consent.</li>
              </ul>
              <p>
                Violation of this policy may result in immediate account suspension or termination.
              </p>

              {/* Section 5 */}
              <h2 id="intellectual-property">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Service — including but not limited to text, graphics, logos, AI models, audio, software code, and design — are owned by Learner AI and are protected by applicable intellectual property laws.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial language learning purposes. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>

              {/* Section 6 */}
              <h2 id="subscriptions">6. Subscriptions &amp; Payments</h2>
              <p>
                Learner AI offers a free tier and optional premium subscription plans. By subscribing to a paid plan:
              </p>
              <ul>
                <li>You authorize us to charge your payment method on a recurring basis (monthly or annually, as selected).</li>
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</li>
                <li>You can cancel your subscription at any time via your App Store or Google Play account settings. Cancellation takes effect at the end of the current billing period.</li>
                <li>We do not offer refunds for partial subscription periods, except where required by applicable law.</li>
                <li>Prices are subject to change with 30 days&apos; notice.</li>
              </ul>

              {/* Section 7 */}
              <h2 id="disclaimers">7. Disclaimers &amp; No Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED ACCESS.
              </p>
              <p>
                We do not warrant that:
              </p>
              <ul>
                <li>The Service will be error-free, uninterrupted, or free of viruses.</li>
                <li>The AI-generated language content is 100% accurate or appropriate for all contexts.</li>
                <li>Your learning outcomes will meet specific expectations or goals.</li>
                <li>The Service will be compatible with all devices or operating systems.</li>
              </ul>
              <p>
                Language learning results vary by individual. Learner AI is a supplemental learning tool and is not a substitute for formal language education or professional instruction.
              </p>

              {/* Section 8 */}
              <h2 id="liability">8. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LEARNER AI AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL — ARISING FROM OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD $10.
              </p>

              {/* Section 9 */}
              <h2 id="indemnification">9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Learner AI and its affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorney&apos;s fees) arising out of or in connection with: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit through the Service.
              </p>

              {/* Section 10 */}
              <h2 id="governing-law">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Learner AI is registered, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration or the courts of competent jurisdiction in our registered location.
              </p>

              {/* Section 11 */}
              <h2 id="termination">11. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including violation of these Terms. Upon termination, your right to use the Service immediately ceases.
              </p>
              <p>
                You may terminate your account at any time by deleting it within the app settings or by contacting us at <a href="mailto:support@learnerai.app">support@learnerai.app</a>.
              </p>

              {/* Section 12 */}
              <h2 id="changes">12. Changes to These Terms</h2>
              <p>
                We may revise these Terms at any time. We will notify you of material changes through the app or by email. The &ldquo;Last updated&rdquo; date at the top of this page reflects when the most recent changes were made.
              </p>
              <p>
                Your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.
              </p>

              {/* Section 13 */}
              <h2 id="contact">13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:legal@learnerai.app">legal@learnerai.app</a></li>
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

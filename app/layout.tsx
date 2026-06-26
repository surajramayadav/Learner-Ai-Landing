import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learner AI — Learn. Speak. Chat.",
  description:
    "Learner AI helps you learn new languages through AI-powered conversation practice, speaking & pronunciation coaching, and personalized learning paths.",
  keywords: [
    "language learning",
    "AI language tutor",
    "learn languages",
    "speaking practice",
    "pronunciation",
    "Learner AI",
    "AI chat practice",
    "language app",
  ],
  authors: [{ name: "Learner AI Team" }],
  openGraph: {
    title: "Learner AI — Learn. Speak. Chat.",
    description:
      "Learn and speak new languages with AI-powered conversation practice. Download Learner AI today.",
    type: "website",
    url: "https://learnerai.app",
    siteName: "Learner AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learner AI — Learn. Speak. Chat.",
    description:
      "Learn and speak new languages with AI-powered conversation practice. Download Learner AI today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900 antialiased">
        {children}
      </body>
    </html>
  );
}

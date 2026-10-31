import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & FAQ — Learner AI",
  description:
    "Get help with Learner AI. Browse frequently asked questions, get technical assistance, or contact our support team at ganeshglive@gmail.com.",
  openGraph: {
    title: "Support & FAQ — Learner AI",
    description:
      "Get help with Learner AI. Browse frequently asked questions, get technical assistance, or contact our support team at ganeshglive@gmail.com.",
    type: "website",
    url: "https://learnerai.app/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

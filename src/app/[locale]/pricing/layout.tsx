import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "TeacherSathi pricing plans. Free tier for basic access, Pro for unlimited AI lesson plans, quizzes, and analytics.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

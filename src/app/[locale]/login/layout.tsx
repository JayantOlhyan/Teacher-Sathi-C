import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your TeacherSathi account. Access AI-powered NCERT lesson plans, quizzes, and teaching tools.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}

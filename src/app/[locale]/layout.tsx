import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isHi = locale === 'hi';
  
  return {
    title: {
      template: '%s | TeacherSathi',
      default: isHi ? 'TeacherSathi | शिक्षकों का सुपरपावर' : 'TeacherSathi | Teachers ka Superpower',
    },
    description: isHi 
      ? 'TeacherSathi: NCERT आधारित AI कंटेंट, वीडियो, क्विज़ और माइंड मैप तुरंत तैयार करें।' 
      : 'TeacherSathi: Generate NCERT-aligned AI content, videos, quizzes, and mind maps instantly.',
    keywords: ['NCERT', 'AI Education', 'Teacher Tools', 'Lesson Planning', 'Indian Education', 'CBSE'],
    openGraph: {
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_IN',
      url: `https://teachersathi.in/${locale}`,
      siteName: 'TeacherSathi',
      images: [
        {
          url: '/og-image.png', // User should provide this
          width: 1200,
          height: 630,
          alt: 'TeacherSathi - Aapka Teaching Companion',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TeacherSathi',
      description: 'Aapka Teaching Companion',
    },
    icons: {
      icon: '/favicon.ico',
    },
    verification: {
      google: '-a0wyjaTybF3gldEtwwHLwq_ChLau7TLls8Q1KFF7lE',
    },
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="-a0wyjaTybF3gldEtwwHLwq_ChLau7TLls8Q1KFF7lE" />
      </head>
      <body
        className={`${inter.variable} ${notoSansDevanagari.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

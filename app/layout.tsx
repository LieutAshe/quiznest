import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: ['100', '200', '400', '500', '700', '900']
});

// app/page.tsx or app/yourpage/page.tsx
export const metadata: Metadata = {
  title: "Quiz Nest",
  description: "Your gateway to fun and challenging quizzes!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://quiznest-seven.vercel.app/",
  },
  openGraph: {
    title: "Online Quizzes!",
    description: "Your gateway to fun and challenging quizzes",
    url: "https://quiznest-seven.vercel.app/",
    siteName: "Quiz Nest",
    locale: "en_PH",
    type: "website",
  },
  verification: {
    google: "WGbTEVgu43c3Nf7xHNZzAcfHbepV_uTDKq9n4KSnj2g"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.variable} antialiased text-slate-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

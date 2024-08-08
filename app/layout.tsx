import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Techvantage",
  description: "TechVantage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
          rel="stylesheet"
        />
      </Head>
      <body className='font-["Lexend","Noto Sans",sans-serif]'>
        <Navbar />
        <ScrollToTop/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rousso van Hoorn - Trading Coach | 8 Jaar Ervaring",
  description: "Beheers de markten met Rousso van Hoorn. 8 jaar trading ervaring, bewezen strategieën en persoonlijke 1-op-1 coaching. Van beginner tot expert.",
  keywords: "trading coach, trading cursus, trading psychologie, risicomanagement, forex trading, aandelen trading, Nederland",
  authors: [{ name: "Rousso van Hoorn" }],
  creator: "Rousso van Hoorn",
  publisher: "Rousso van Hoorn",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://roussovh.nl",
    title: "Rousso van Hoorn - Trading Coach",
    description: "8 jaar trading ervaring. Van beginner tot expert. Nu deel ik bewezen strategieën met ambitieuze traders.",
    siteName: "Rousso van Hoorn Trading Coach",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rousso van Hoorn - Trading Coach",
    description: "8 jaar trading ervaring. Van beginner tot expert. Nu deel ik bewezen strategieën met ambitieuze traders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

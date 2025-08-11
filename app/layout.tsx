import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Kalpit Chandekar - Frontend & Web Developer",
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. Creating user-friendly solutions that solve real-world problems.",
  keywords:
    "frontend developer, web developer, React, Next.js, TypeScript, JavaScript, UI/UX",
  authors: [{ name: "Kalpit Chandekar" }],
  creator: "Kalpit Chandekar",
  metadataBase: new URL("https://kalpit-portfolio.vercel.app"),
  openGraph: {
    title: "Kalpit Chandekar - Frontend & Web Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript. Creating user-friendly solutions that solve real-world problems.",
    url: "https://kalpit-portfolio.vercel.app",
    siteName: "Kalpit Chandekar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpit Chandekar - Frontend & Web Developer",
    description:
      "Frontend developer specializing in React, Next.js, and TypeScript.",
    creator: "@kalpit_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-gray-900 text-white antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/20">
          {children}
        </div>
      </body>
    </html>
  );
}

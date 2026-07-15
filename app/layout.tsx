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
  metadataBase: new URL("https://mamugeedevelopers.com"), // Change after deployment if needed

  title: {
    default: "Mamu Gee Developers | Premium Real Estate in Karnataka",
    template: "%s | Mamu Gee Developers",
  },

  description:
    "Mamu Gee Developers offers premium residential plots, layouts, villas, and real estate projects in Karnataka with trusted quality and modern infrastructure.",

  keywords: [
    "Mamu Gee Developers",
    "Real Estate",
    "Plots",
    "Residential Plots",
    "Layouts",
    "Karnataka",
    "Property",
    "Villas",
    "Builders",
    "Land for Sale",
  ],

  authors: [
    {
      name: "Mamu Gee Developers",
    },
  ],

  creator: "Mamu Gee Developers",

  openGraph: {
    title: "Mamu Gee Developers",
    description:
      "Premium residential plots and real estate projects in Karnataka.",
    url: "https://mamugeedevelopers.com",
    siteName: "Mamu Gee Developers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mamu Gee Developers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mamu Gee Developers",
    description:
      "Premium residential plots and real estate projects in Karnataka.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamu-gee-developers.com"), // Change after deployment if needed

  title: {
    default: "Mamu Gee Developers | Premium Real Estate in Greater Noida, Uttar Pradesh",
    template: "%s | Mamu Gee Developers",
  },

  description:
    "Mamu Gee Developers offers premium residential plots, layouts, villas, and real estate projects in Greater Noida, Haldoni,and nearby areas with trusted quality and modern infrastructure.",

  keywords: [
  "Mamu Gee Developers",
  "Greater Noida",
  "Noida",
  "Uttar Pradesh",
  "Delhi NCR",
  "Real Estate",
  "Residential Plots",
  "Plots in Greater Noida",
  "Property in Greater Noida",
  "Villas",
  "Land for Sale",
  "Builders",
],

  authors: [
    {
      name: "Mamu Gee Developer",
    },
  ],

  creator: "Mamu Gee Developer",

  openGraph: {
    title: "Mamu Gee Developer",
    description:
      "Premium residential plots, villas, and real estate projects in Greater Noida, Uttar Pradesh.",
    url: "https://mamu-gee-developer.com",
    siteName: "Mamu Gee Developer",
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
     "Discover premium residential plots, villas, and real estate projects in Greater Noida, Haldoni, and nearby areas. Mamu Gee Developers delivers trusted property solutions with quality infrastructure and transparent service.",
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

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-R9F00L63Q9"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-R9F00L63Q9');
    `}
  </Script>
</body>
    </html>
  );
}
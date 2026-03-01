import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tigat Tech - Elevate Your Digital Presence",
    template: "%s | Tigat Tech",
  },
  description:
    "Tigat Tech offers comprehensive digital solutions including web design, development, and project management.",
  metadataBase: new URL("https://tigattech.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Tigat Tech",
  keywords: [
    "Tigat Tech",
    "web design",
    "web development",
    "digital agency",
    "project management",
    "UI/UX",
    "branding",
    "software engineering",
  ],
  authors: [{ name: "Tigat Tech", url: "https://tigattech.com" }],
  creator: "Tigat Tech",
  publisher: "Tigat Tech",
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
  icons: {
    icon: "/t.png",
    shortcut: "/t.png",
    apple: "/t.png",
  },
  openGraph: {
    title: "Tigat Tech - Elevate Your Digital Presence",
    description:
      "Tigat Tech offers comprehensive digital solutions including web design, development, and project management.",
    url: "https://tigattech.com",
    siteName: "Tigat Tech",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tigat Tech — Elevate Your Digital Presence",
      },
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Tigat Tech logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigat Tech - Elevate Your Digital Presence",
    description:
      "Tigat Tech offers comprehensive digital solutions including web design, development, and project management.",
    images: ["/og-image.svg"],
    site: "@tigattech",
    creator: "@tigattech",
  },
  other: {
    "pinterest-rich-pin": "true",
    "og:see_also": [
      "https://x.com/tigattech",
      "https://www.linkedin.com/company/tigat-tech",
      "https://www.facebook.com/tigattech",
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Tigat Tech",
      url: "https://tigattech.com",
      logo: "https://tigattech.com/logo.png",
      sameAs: [
        "https://x.com/tigattech",
        "https://www.linkedin.com/company/tigat-tech",
        "https://www.facebook.com/tigattech",
      ],
    },
    {
      "@type": "WebSite",
      name: "Tigat Tech",
      url: "https://tigattech.com",
      publisher: {
        "@type": "Organization",
        name: "Tigat Tech",
      },
    },
    {
      "@type": "WebPage",
      name: "Tigat Tech - Elevate Your Digital Presence",
      url: "https://tigattech.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          {/* Google material icons */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />

          {/* Favicon / Touch icon (uses file: /public/t.png) */}
          <link rel="icon" href="/t.png" />
          <link rel="shortcut icon" href="/t.png" />
          <link rel="apple-touch-icon" href="/t.png" />

          {/* Recommended viewport + theme color */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />

    {/* Canonical */}
    <link rel="canonical" href="https://tigattech.com/" />

    {/* Web manifest */}
    <link rel="manifest" href="/manifest.json" />

          {/* Open Graph / Facebook / LinkedIn */}
          <meta property="og:title" content="Tigat Tech - Elevate Your Digital Presence" />
          <meta property="og:description" content="Tigat Tech offers comprehensive digital solutions including web design, development, and project management." />
          <meta property="og:image" content="https://tigattech.com/og-image.svg" />
          <meta property="og:url" content="https://tigattech.com" />
          <meta property="og:site_name" content="Tigat Tech" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@tigattech" />
          <meta name="twitter:creator" content="@tigattech" />
          <meta name="twitter:title" content="Tigat Tech - Elevate Your Digital Presence" />
          <meta name="twitter:description" content="Tigat Tech offers comprehensive digital solutions including web design, development, and project management." />
          <meta name="twitter:image" content="https://tigattech.com/og-image.svg" />

          {/* Verification (place your site verification codes here) */}
          {/* Example: <meta name="google-site-verification" content="YOUR_CODE" /> */}
          {/* Example: <meta name="msvalidate.01" content="YOUR_BING_CODE" /> */}

          {/* Extra social discoverability hints */}
          <meta name="referrer" content="no-referrer-when-downgrade" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

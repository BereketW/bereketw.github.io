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
  title: "Tigat Tech - Elevate Your Digital Presence",
  description: "Tigat Tech offers comprehensive digital solutions including web design, development, and project management.",
  metadataBase: new URL("https://tigattech.com"),
  icons: {
    icon: "/t.png",
  },
  openGraph: {
    title: "Tigat Tech - Elevate Your Digital Presence",
    description:
      "Tigat Tech offers comprehensive digital solutions including web design, development, and project management.",
    url: "https://tigattech.com",
    siteName: "Tigat Tech",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
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
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
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

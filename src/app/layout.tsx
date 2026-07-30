import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://hubristicdonkey.com";
const SITE_TITLE = "Hubristic Donkey — Event Photography";
const SITE_DESCRIPTION =
  "Event photography, worldwide. Concerts, festivals, sport, and the quiet minutes nobody else is looking at.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Hubristic Donkey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hubristic Donkey",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  email: "hello@hubristicdonkey.com",
  areaServed: "Worldwide",
  sameAs: [
    "https://www.instagram.com/hubristic_donkey/",
    "https://www.etsy.com/shop/HubristicDonkey",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-parchment font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}

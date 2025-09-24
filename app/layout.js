import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Seminole Saver — FSU Student Deals",
  description:
    "Discover verified student discounts around Tallahassee and save smarter at FSU.",
  metadataBase: new URL("https://seminolesaver.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#782F40",
  openGraph: {
    title: "Seminole Saver",
    description: "Save Smarter at FSU",
    url: "https://seminolesaver.com",
    siteName: "Seminole Saver",
    images: [
      {
        url: "/og.png", // or your /opengraph-image route
        width: 1200,
        height: 630,
        alt: "Seminole Saver Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seminole Saver",
    description: "Save Smarter at FSU",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bone text-ink antialiased">
        <div className="min-h-screen flex flex-col">{children}</div>

        {/* JSON-LD Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Seminole Saver",
              url: "https://seminolesaver.com",
              description:
                "Discover verified student discounts around Tallahassee and save smarter at FSU.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://seminolesaver.com/deals?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Seminole Saver",
  description: "Save smarter at FSU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* 👈 Required for tracking */}
      </body>
    </html>
  );
}

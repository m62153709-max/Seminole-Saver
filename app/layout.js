import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // ✅ Added this line

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seminole Saver",
  description: "Save smarter at FSU – student discounts and deals in Tallahassee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics /> {/* ✅ This activates Vercel Analytics */}
      </body>
    </html>
  );
}

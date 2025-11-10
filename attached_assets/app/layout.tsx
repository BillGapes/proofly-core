import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proofly – Verified Skills & References",
  description: "Reference-verified profiles with weighted skill ratings and standout stories.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

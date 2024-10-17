import type { Metadata } from "next";
import { Libre_Baskerville, Urbanist } from "next/font/google";
import "./globals.css";

// Main font
const FontUrbanist = Urbanist({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

// Header Font
const FontLibreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Babette Stam",
  description:
    "Passionate software developer, ready for a new creative challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FontUrbanist.variable} ${FontLibreBaskerville.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Abhaya_Libre } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Reen: Hormonal Health, Reimagined",
  description:
    "Reen is an AI-powered hormonal health companion that connects your cycle, symptoms, wearables, and labs so you can finally understand why you feel this way. Coming soon to the App Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${abhayaLibre.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

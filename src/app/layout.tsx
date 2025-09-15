import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Comfortaa } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paydios - Your All-in-One Payment Gateway Solution",
  description: "Welcome to Paydios, your all-in-one payment gateway solution designed to help your business accept payments securely, track earnings, and grow with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${comfortaa.variable} antialiased`}
>

        {children}
      </body>
    </html>
  );
}

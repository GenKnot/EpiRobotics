import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css"
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EpiRobotics",
  description: "EpiRobotics develops cutting-edge robotic systems for lumbar transforaminal epidural injections, enhancing surgical precision and patient safety through AI-powered technology and real-time navigation.",
  keywords: "medical robotics, surgical robotics, epidural injections, AI surgery, precision medicine, medical technology, robotic surgery",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

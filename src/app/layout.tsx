import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "@/components/DesktopNavbar";
import Navbar from "@/components/Navbar";
import NavbarContainer from "@/components/NavbarContainer";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paragraph",
  description: "Generated blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased]`}
      >
        <Providers>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

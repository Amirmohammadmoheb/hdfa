import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GiggleFund - Educational Support Platform",
  description: "giggletoken.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/appmin.js" strategy="afterInteractive"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{backgroundColor:"hsl(195 100% 85% / 1)",color:"hsl(240 20% 15%)"}}
      >
        {children}
      </body>
    </html>
  );
}

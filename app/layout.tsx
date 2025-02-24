import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatinun K - Trilingual Software Engineer Portfolio",
  description:
    "Explore Chatinun's portfolio, a trilingual software engineer specializing in Next.js, React, and Spring Boot. Based in Japan.",
  openGraph: {
    title: "Chatinun K - Trilingual Software Engineer",
    description:
      "Explore Chatinun's portfolio, showcasing expertise in Next.js, React, Spring Boot, and full-stack development.",
    url: "https://chatinun-k.com",
    type: "website",
    images: [
      {
        url: "https://chatinun-k.com/previewimg.png",
        width: 1200,
        height: 630,
        alt: "Chatinun's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatinun K - Software Engineer",
    description:
      "Trilingual software engineer specializing in Next.js, React, and Spring Boot.",
    images: ["https://chatinun-k.com/previewimg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

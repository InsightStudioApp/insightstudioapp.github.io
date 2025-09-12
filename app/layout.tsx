import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Insight Studio - Mobile App Development",
  description: "Mobile app development studio specializing in innovative solutions. Featured app: Insight Sudoku.",
  keywords: "mobile app development, iOS, Android, Insight Sudoku, app studio",
  authors: [{ name: "Insight Studio" }],
  creator: "Insight Studio",
  publisher: "Insight Studio",
  robots: "index, follow",
  openGraph: {
    title: "Insight Studio - Mobile App Development",
    description: "Mobile app development studio specializing in innovative solutions.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-localize className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

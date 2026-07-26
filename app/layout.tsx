import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "../components/TanStackProvider/TanStackProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Application for managing notes",
  openGraph: {
    title: "NoteHub",
    description: "Application for managing notes",
    url: "http://localhost:3000",
    images: [
  {
    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    width: 1000,
    height: 600,
    alt: "NoteHub"
  },
],
type: "website",
  },
};


export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;

}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Providers>
        <Header />
        {children}
        {modal}
            <Footer />
            </Providers>
      </body>
    </html>
  );
}

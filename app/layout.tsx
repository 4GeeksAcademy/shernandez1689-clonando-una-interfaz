import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "clonbnb · Alojamientos para vacaciones",
  description: "Clon de la interfaz de Airbnb hecho con Next.js y Tailwind CSS",
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html
    lang="es"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col font-sans">{children}</body>
  </html>
);

export default RootLayout;

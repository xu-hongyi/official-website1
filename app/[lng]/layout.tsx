import type { Metadata } from "next";
import "./globals.css";
import { locales } from "@/config";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return locales.map(lng => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string }
}>) {
  return (
    <html lang={lng}>
      <body>
          <Header></Header>
          {children}
        </body>
    </html>
  );
}

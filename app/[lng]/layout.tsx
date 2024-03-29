import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { locales } from "@/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieAccept from "../components/CookieAccept";

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
        <Header lng={lng}></Header>
        <div className="pt-[149px] text-black">
          <AntdRegistry>{children}</AntdRegistry>
        </div>
        <CookieAccept />
        <Footer lng={lng}></Footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/shared/Navbar";
import { content } from "../../public/locales/es";

const text = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "1000"],
});

export const metadata: Metadata = {
  title: content.config.title,
  description: content.config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${text.className} text-balance bg-light text-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

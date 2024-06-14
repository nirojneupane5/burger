import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger",
  description: "Burger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

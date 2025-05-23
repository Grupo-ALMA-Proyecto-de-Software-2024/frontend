import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGE-PRO",
  description: "An ALMA Large Program to study disk evolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="navbar">
            <Navbar />
          </div>
        <div className="container">
          {children}
        <div className="footer">
            <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}

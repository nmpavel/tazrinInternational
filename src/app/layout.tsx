import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/hooks/useToast";
import Navbar from "@/views/appbars/Navbar";
import Footer from "@/views/appbars/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tazrin International",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
          {/* <Navbar /> */}
          {children}
          {/* <Footer />
          <ScrollToTopButton />
          <ToastProvider /> */}
      </body>
    </html>
  );
}

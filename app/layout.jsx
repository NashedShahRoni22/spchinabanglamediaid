import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import WhatsAppFloat from "./components/shared/WhatsAppFloat";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "sp ChinaBangla Mediaid",
  description: "World-class healthcare, now within your reach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
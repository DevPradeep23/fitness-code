import Navbar from "@/component/navbar/Navbar";
import "tailwindcss/tailwind.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/main/Footer";
import BeatsFooter from "@/main/BeatsFooter";
import Scroll from "@/main/Scroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beats fitness",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Scroll/>
        <BeatsFooter />
      </body>
    </html>
  );
}

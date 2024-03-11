import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to SMKNUSA",
  description: "This website provide information about SMKNUSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F2F2F2] ${montserrat.className}`}>
        <nav className="relative ">
          <Navbar />
        </nav>
        <div className="p-3 overflow-hidden">{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

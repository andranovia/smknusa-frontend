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
  title: "Welcome to SMK Negeri 1 Purwosari",
  description: "Website ini memberikan informasi detail mengenai SMKNUSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/logo-skansa.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </head>
      <body className={`bg-[#F2F2F2] ${montserrat.className}`}>
        <nav className="">
          <Navbar />
        </nav>
        <div className="p-3 overflow-hidden">{children}</div>
        <footer className=" ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

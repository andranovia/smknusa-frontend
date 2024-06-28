import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/footer";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";
import { ClientOnly } from "@/utils/isClient";

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
          href="/assets/icon/logo-skansa.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </head>
      <body className={`bg-gray-base ${montserrat.className}`}>
        <nav className="bg-gray-base">
          <ClientOnly>
          <Navbar />
          </ClientOnly>
        </nav>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

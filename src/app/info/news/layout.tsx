import "@/app/globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navigation";
import Footer from "@/components/footer/footer";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";
import { ClientOnly } from "@/utils/isClient";
import { ActivePageProvider } from "@/contexts/ActivePageContext";
import { ActiveToastProvider } from "@/contexts/ActiveToastContext";
import UnavailableToast from "@/components/ui/unavailable-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "School News",
  description: "SMKN 1 Purwosari School News",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-[#F5C451] scrollbar-track-yellow-100"
    >
      <head>
        <link
          rel="icon"
          href="/assets/icon/logo-skansa.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </head>
      <body className={`bg-gray-base ${montserrat.className}`}>
        <ActiveToastProvider>
          <nav className="bg-gray-base xl:flex justify-center ">
            <ClientOnly>
              <ActivePageProvider>
                <Navbar />
              </ActivePageProvider>
            </ClientOnly>
          </nav>
          <main>
            <ReactQueryProvider>
              <UnavailableToast />
              {children}
            </ReactQueryProvider>
          </main>
          <footer className=" px-2 xl:px-2.5 pb-2 xl:pb-2.5">
            <Footer />
          </footer>
        </ActiveToastProvider>
      </body>
    </html>
  );
}
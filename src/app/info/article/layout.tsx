import type { Metadata } from "next";
import "@/app/globals.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const metadata: Metadata = {
  title: "School Articles",
  description: "SMKN 1 Purwosari School Articles",
};

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

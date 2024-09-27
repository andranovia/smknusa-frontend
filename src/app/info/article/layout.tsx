import type { Metadata } from "next";
import "@/app/globals.css";

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

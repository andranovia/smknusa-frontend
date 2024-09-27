import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "School Facility",
  description: "SMKN 1 Purwosari School Facility",
};

export default function FacilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

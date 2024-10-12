import "@/app/globals.css";

export const metadata = {
  title: "School Residents",
  description: "SMKN 1 Purwosari Residents",
};

export default function ResidentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

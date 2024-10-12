import "@/app/globals.css";

export const metadata = {
  title: "School Partnership",
  description: "SMKN 1 Purwosari School Partnership",
};

export default function PartnershipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

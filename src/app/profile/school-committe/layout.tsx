import "@/app/globals.css";

export const metadata = {
  title: "School Committee",
  description: "SMKN 1 Purwosari School Committee",
};

export default function SchoolCommitteeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

import "@/app/globals.css";

export const metadata = {
  title: "School Structure",
  description: "SMKN 1 Purwosari School Structure",
};

export default function SchoolStructureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

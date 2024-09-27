import "@/app/globals.css";

export const metadata = {
  title: "School Major",
  description: "SMKN 1 Purwosari School Major",
};

export default function MajorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

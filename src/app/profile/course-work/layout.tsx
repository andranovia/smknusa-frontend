import "@/app/globals.css";

export const metadata = {
  title: "School Committee",
  description: "SMKN 1 Purwosari School Committee",
};

export default function SchoolCourseWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

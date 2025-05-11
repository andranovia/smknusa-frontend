import "@/app/globals.css";

export const metadata = {
  title: "School Welcome Speech",
  description: "SMKN 1 Purwosari School Welcome Speech",
};

export default function SchoolCourseWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

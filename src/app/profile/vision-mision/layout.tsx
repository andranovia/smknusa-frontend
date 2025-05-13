import "@/app/globals.css";

export const metadata = {
  title: "School Vision & Mision",
  description: "SMKN 1 Purwosari School Vision and Mision",
};

export default function SchoolCourseWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

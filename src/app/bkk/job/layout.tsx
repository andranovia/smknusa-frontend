import "@/app/globals.css";

export const metadata = {
  title: "Job Vacancies",
  description: "SMKN 1 Purwosari Job Vacancies",
};

export default function VacancyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

import "@/app/globals.css";

export const metadata = {
  title: "School Teaching Device",
  description: "SMKN 1 Purwosari Teaching Device",
};

export default function DeviceFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

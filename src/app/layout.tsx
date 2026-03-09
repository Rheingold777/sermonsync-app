import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SermonSync - Your sermon, in every pocket by Monday morning",
  description: "Automated sermon recap delivery for churches. Drop your notes, approve the recap, we handle the rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

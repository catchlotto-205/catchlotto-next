import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CatchLotto Admin",
  description: "CatchLotto Admin Panel",
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

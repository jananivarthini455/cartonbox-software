import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "./components/applayout";

export const metadata: Metadata = {
  title: "Packaging ERP",
  description: "Job Card System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
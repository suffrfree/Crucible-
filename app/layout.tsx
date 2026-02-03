import type { ReactNode } from "react";

import "./globals.css";

export const metadata = {
  title: "Crucible",
  description: "A calm space for mission-first conversation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}

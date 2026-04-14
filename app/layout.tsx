import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Texas Husky Rescue",
  description: "Husky Home Quest prototype for Texas Husky Rescue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

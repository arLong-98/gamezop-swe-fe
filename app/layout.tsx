import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import RegisterWorker from "@/components/RegisterWorker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamezop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={clsx(
          inter.className,
          "min-h-screen max-w-[1440px] mx-auto bg-background font-sans antialiased"
        )}
      >
        {children}
      </body>
      <RegisterWorker />
    </html>
  );
}

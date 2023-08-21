import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Created by Charles Chukwuemeka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto mt-20 max-w-[30rem] rounded-2xl border-2 border-slate-100 bg-slate-800 px-4 py-4 text-slate-100 lg:px-10`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Why you should hire me as your intern: Elicit",
  description: "Why you should hire me as your intern: Elicit",
  openGraph: {
    images:
      "https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/651bbd68d308f8ac4a10837e_Fav%20Ico%20Elicit.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

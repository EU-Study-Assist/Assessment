import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EU Assessment",
  description: "A short practical skill test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased bg-slate-50`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

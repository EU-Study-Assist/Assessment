import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

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
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

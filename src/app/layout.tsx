import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sklep Osiedlowy szczeniak",
  description: "Przykladowa strona sklepu zoologicznego z wykorzystaniem arkusza google",
  keywords: ["sklep zoologiczny", "google sheets", "nextjs"],
  openGraph: {
    title: "Przykladowa strona sklepu zoologicznego z wykorzystaniem arkusza google",
    description: "Przykladowa strona sklepu zoologicznego z wykorzystaniem arkusza google",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={`${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col  pt-0">
        <Header />
        {children}
      </body>
    </html>
  );
}

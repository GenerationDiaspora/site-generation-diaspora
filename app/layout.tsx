import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Génération Diaspora - Association de la jeunesse marocaine en France",
  description: "Génération Diaspora est une association dédiée à l'épanouissement de la jeunesse marocaine en France. Proximité, humanité, solidarité et fraternité sont nos valeurs fondatrices.",
  keywords: ["diaspora", "marocaine", "jeunesse", "association", "France", "Maroc", "solidarité", "fraternité"],
  authors: [{ name: "Génération Diaspora" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


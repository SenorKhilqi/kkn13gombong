import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAuthUser } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Informasi Desa Gombong Ciawi",
  description: "Website resmi Pemerintah Desa Gombong Ciawi - Portal informasi dan layanan digital untuk masyarakat Desa Gombong Ciawi, Kecamatan Ciawi, Kabupaten Tasikmalaya",
  keywords: ["Desa Gombong Ciawi", "Pemerintah Desa", "Tasikmalaya", "Ciawi", "Informasi Desa"],
  authors: [{ name: "Pemerintah Desa Gombong Ciawi" }],
  verification: {
    google: "Z8Uxpl3-Q73oxJ3TqkPSTiWv2Lur5r6P6KOS7n4U9QY",
  },
  openGraph: {
    title: "Sistem Informasi Desa Gombong Ciawi",
    description: "Website resmi Pemerintah Desa Gombong Ciawi - Portal informasi dan layanan digital untuk masyarakat Desa Gombong Ciawi",
    url: "https://desagomboongciawi.com",
    siteName: "Sistem Informasi Desa Gombong Ciawi",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistem Informasi Desa Gombong Ciawi",
    description: "Website resmi Pemerintah Desa Gombong Ciawi",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getAuthUser();

  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar user={user} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

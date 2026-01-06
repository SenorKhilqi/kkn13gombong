import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAuthUser } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Gombong Kab Tasikmalaya",
  description: "Portal informasi dan layanan digital Desa Gombong, Kabupaten Tasikmalaya, Jawa Barat",
  keywords: ["Desa Gombong", "Kabupaten Tasikmalaya", "Tasikmalaya", "Portal Desa", "Gombong"],
  authors: [{ name: "Desa Gombong" }],
  openGraph: {
    title: "Desa Gombong Kab Tasikmalaya",
    description: "Portal informasi dan layanan digital Desa Gombong, Kabupaten Tasikmalaya, Jawa Barat",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Gombong Kab Tasikmalaya",
    description: "Portal informasi dan layanan digital Desa Gombong, Kabupaten Tasikmalaya, Jawa Barat",
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

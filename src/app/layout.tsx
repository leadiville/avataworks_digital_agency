import { Geist } from 'next/font/google'; import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Head from 'next/head';
import Script from "next/script";
import * as FontawesomeIcons from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Minimal version - Filtering out the icons we need, so we don't fetch everything every time
const chosenIcons = Object.values(FontawesomeIcons).filter(
  (icon): icon is FontawesomeIcons.IconDefinition => typeof icon === "object" && icon !== null && "iconName" in icon && typeof icon.iconName === "string" && icon.iconName.trim().length > 0
);

// Add the icons to your library form fontAwesome
library.add(...chosenIcons);

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans', // Optional CSS variable name
});

export const metadata = {
  title: "Avataworks",
  description: "Advanced Virtual Assistance in Technology and Advertising",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossOrigin="anonymous"></Script>
      <Head >
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossOrigin="anonymous"></link>
      </Head>
      <body className={`${geistSans.className}`}>
        {children}
      </body>
    </html>
  );
}

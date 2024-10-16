import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "deer  foot dis ease",
  description: "i love deer!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
	  <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
	  <div className="flex items-center justify-center">
		<header>
		   <nav className="flex flex-col p-2">
		   <Link
            className="border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#75715E] text-sm sm:text-base h-10 sm:h-10 px-5 sm:px-5"
            href="/"
           >
            horse pages
		</Link>
		  </nav>
		  </header>
		</div>
		{children}
      </body>
    </html>
  );
}

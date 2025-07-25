import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Montserrat, Noto_Sans, Noto_Serif, Noto_Sans_Mono } from 'next/font/google'
import sf from "./icon.svg";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})
 
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})
 
const noto_serif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
})

const noto_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-mono',
})
 
export const metadata: Metadata = {
  title: "a9lim",
  description: "*WIP*",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${noto_sans.variable} ${noto_serif.variable} ${noto_mono.variable}`}>
      <body>
        <header className="fixed top-0 inset-x-0 flex items-center justify-center bg-[#dce0e8] h-12">
          <nav className="flex flex-row p-2 gap-2">
            <Link
              className="text-lg hover:underline hover:underline-offset-4"
              href="/" >
              home ヾ(•ω•&#96;)o
            </Link>
            <Image
              src={sf}
              alt="icon"
              width={30}
              height={30}
              priority />
            <Link
              className="text-lg hover:underline hover:underline-offset-4"
              href="/posts" >
              posts U•ェ•*U
            </Link>
            <Image
              src={sf}
              alt="icon"
              width={30}
              height={30}
              priority />
            <Link
              className="text-lg hover:underline hover:underline-offset-4"
              href="/horses" >
              about (/≧▽≦)/
            </Link>
            <Image
              src={sf}
              alt="icon"
              width={30}
              height={30}
              priority />
            <Link
              className="text-lg hover:underline hover:underline-offset-4"
              href="/contact" >
              contact (｡･∀･)ﾉﾞ
            </Link>              
          </nav>
        </header>
        {children}
        <footer className="fixed bottom-0 inset-x-0 flex w-screen bg-[#ffffff00] h-12">
          <p className="animate-swag"> 
            ε=ε=ε=(~￣▽￣)~
          </p>
        </footer>
      </body>
    </html>
  );
}

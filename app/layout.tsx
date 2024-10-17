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
	  <header className="fixed top-0 inset-x-0 flex items-center justify-center bg-[#333a41dd] h-12">
		   <nav className="flex flex-row p-2 gap-2">
		   <Image
            src={sf}
            alt="gowza"
            width={25}
            height={25}
            priority
          />
		   <Link
            className="border border-solid border-transparent flex items-center justify-center text-foreground text-lg gap-2 hover:underline hover:underline-offset-4"
            href="/"
           >
            home ヾ(•ω•`)o
		</Link>
		  </nav>
		</header>
		{children}
		<footer className="fixed bottom-0 inset-x-0 flex w-screen bg-[#ffffff00] h-12">
		   <p className="animate-swag"> ε=ε=ε=(~￣▽￣)~ </p>
		  </footer>
      </body>
    </html>
  );
}

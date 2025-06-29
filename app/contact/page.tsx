import Image from "next/image";
import gh from "./github-mark-white.svg";
import dc from "./icon_clyde_white_RGB.svg";
import ln from "./linkedin.svg";
import ig from "./Instagram_Glyph_White.svg";
import pt from "./mail.svg";
import ph from "./phone.svg";
const imageStyle = {
  fill: "#d20f39",
  stroke: "#d20f39",
  color: "#d20f39",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-2">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-7xl font-semibold">
          contact
        </h1>
        <ul className="leading-10 text-lg"> 
          <li className="flex flex-row gap-2" > 
            <Image
              className="object-contain"
              src={ph}
              alt="generic phone icon"
              width={25} height={25}
              unoptimized />
            +1 (858) 585-1057 
          </li>
          <li> 
            <a 
              className="flex flex-row gap-2 hover:underline hover:underline-offset-4" 
              href="mailto:a9lim@protonmail.com"
              rel="noopener noreferrer" > 
              <Image
                className="object-contain"
                src={pt}
                alt="generic mail icon"
                width={25} height={25}
                unoptimized
                priority />
              a9lim@protonmail.com 
            </a> 
          </li>
          <li className="flex flex-row gap-2" > 
            <Image
              className="object-contain"
              src={dc}
              alt="discord icon"
              width={25} height={25}
              unoptimized
              priority />
             @a9lim 
          </li>
          <li> 
            <a 
              className="flex flex-row gap-2 hover:underline hover:underline-offset-4" 
              href="https://github.com/a9lim"
              rel="noopener noreferrer" > 
              <Image
                className="object-contain"
                src={gh}
                alt="github icon"
                width={25} height={25}
                unoptimized
                priority />
              github.com/a9lim 
              </a> 
          </li>
          <li> 
            <a 
              className="flex flex-row gap-2 hover:underline hover:underline-offset-4"
              href="https://linkedin.com/in/a9lim/ "
              rel="noopener noreferrer" > 
              <Image
                className="object-contain"
                src={ln}
                alt="linkedin icon"
                width={25} height={25}
                unoptimized
                priority />
              linkedin.com/in/a9lim/ 
            </a> 
          </li>
          <li> 
            <a 
              className="flex flex-row gap-2 hover:underline hover:underline-offset-4"
              href="https://instagram.com/a.9lim/"
              rel="noopener noreferrer" > 
              <Image
                className="object-contain"
                src={ig}
                alt="instagram icon"
                width={25} height={25}
                unoptimized
                priority />
              @a.9lim
            </a> 
          </li>
        </ul>
      </main>
    </div>
  );
}

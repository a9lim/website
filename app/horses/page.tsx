import Image from "next/image";
import srb from "./serbianpresident.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
	  	<h1 className="text-7xl font-semibold">
		about
		</h1>
		<a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://en.wikipedia.org/wiki/Evil_eye"
            rel="noopener noreferrer"
          >
          <Image
            src={srb}
            alt="gowza"
            width={500}
            height={500}
            priority
          />
		</a>
        <p>
		    Hello! I&apos;m Aidan Lim, a current sophmore at UCSD. I&apos;m a
		 </p>
		 <h2 className="text-5xl font-semibold"> things i&apos;ve been up to </h2>
		 <ul className="list-disc"> 
		 <li> lab </li>
		 <li> gorp </li>
		 </ul>
      </main>
    </div>
  );
}

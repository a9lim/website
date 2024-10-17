import Image from "next/image";
import Link from "next/link";
import flag from "./bigflag.svg";
import map from "./clab5.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-2">
      <main className="flex flex-col gap-8 items-center">
	  	<h1 className="text-7xl font-semibold">
		homepage
		</h1>
		<a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://en.wikipedia.org/wiki/Evil_eye"
            rel="noopener noreferrer"
          >
          <Image
		    aria-hidden
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Oxygen480-status-weather-clear-night_Workaround.svg"
            alt="cool inmage"
            width={500}
            height={500}
            priority
          />
		</a>
	      <p>
		    Hi! This website is currently a work in progress. Please check back soon! <br/> {" "}
		  </p>
        <div className="flex gap-4 items-center flex-row">
          <Link
            className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#cadbdb] text-sm h-10 px-4"
            href="/horses"
          >
            About me
          </Link>
          <Link
            className="rounded border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#30333e] hover:border-transparent text-sm h-10 px-4"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4"
          href="/flags"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={flag}
            alt="flag"
            width={200}
            height={200}
          />
		  Vexillology
        </a>
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4"
          href="/maps"
          rel="noopener noreferrer"
        >
          <Image
		  className="bg-white"
            aria-hidden
            src={map}
            alt="map"
            width={200}
            height={200}
          />
		  Cartography
        </a>
      </footer>
    </div>
  );
}

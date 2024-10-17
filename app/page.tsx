import Image from "next/image";
import horses from "./bigflag.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-2">
      <main className="flex flex-col gap-8 items-center">
	  	<h1 className="flex text-7xl font-semibold">
		wowza
		</h1>
		<a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://en.wikipedia.org/wiki/Evil_eye"
            rel="noopener noreferrer"
          >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Oxygen480-status-weather-clear-night_Workaround.svg"
            alt="cool inmage"
            width={500}
            height={500}
            priority
          />
		</a>
        <ol className="list-inside list-decimal text-sm text-center">
	      <p>
		    Hi! This website is currently a work in progress. Please check back soon! <br/> {" "}
			<code className="bg-black/[.05] dark:bg-white/[.05] px-1 py-0.5 rounded font-semibold">
              worms!!! worms!!!! aAAAAAAAAAAAA!!!!!!!
            </code>
		  </p>
          <p> wow!!! <br/> wowza! </p>
        </ol>

        <div className="flex gap-4 items-center flex-row">
          <a
            className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#75715E] text-sm h-10 px-4"
            href="/horses"
          >
            About me
          </a>
          <a
            className="rounded border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ff00] dark:hover:bg-[#2D2E27] hover:border-transparent text-sm h-10 px-4"
            href="https://en.wikipedia.org/wiki/Horse_(disambiguation)"
            rel="noopener noreferrer"
          >
            more hroses
          </a>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={horses}
            alt="File icon"
            width={200}
            height={200}
          />
        </a>
        <a
          className="flex items-center gap-2 dark:hover:border-yellow-300 dark:hover:border-solid"
          href="google.com"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Guangdong_in_China_%28%2Ball_claims_hatched%29.svg"
            alt="Window icon"
            width={200}
            height={200}
          />
        </a>
      </footer>
    </div>
  );
}

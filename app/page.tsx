import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-montserrat )]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
		<a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://en.wikipedia.org/wiki/Evil_eye"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            className="dark:invert"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Oxygen480-status-weather-clear-night_Workaround.svg"
            alt="Next.js logo"
            width={200}
            height={200}
            priority
          />
		</a>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-noto-sans)]">
	      <p>
		    TRHE EVIL MOON!!!!!! <br/> {" "}
			<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              worms!!! worms!!!! aAAAAAAAAAAAA!!!!!!!
            </code>
		  </p>
          <p> wow!!! <br/> wowza! </p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#75715E] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://en.wikipedia.org/wiki/Horse"
            target="_blank"
            rel="noopener noreferrer"
          >
            horse pages
          </a>
          <a
            className="rounded border border-dashed border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ff00] dark:hover:bg-[#2D2E27] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://en.wikipedia.org/wiki/Horse_(disambiguation)"
            target="_blank"
            rel="noopener noreferrer"
          >
            more hroses
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/2022_Russian_invasion_of_Ukraine.svg"
            alt="File icon"
            width={200}
            height={200}
          />
        </a>
        <a
          className="border-8 border-dashed border-black/[0.7] flex items-center gap-2 dark:hover:border-yellow-300 dark:hover:border-solid"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
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

import Image from "next/image";
import flag from "./bigflag.svg";
import map from "./clab5.svg";
import hyrax from "./hyrax.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-2" >
      <main className="flex flex-col gap-8 items-center" >
        <h1 className="text-7xl font-semibold" >
          a9lim
        </h1>
        <Image
          src={hyrax}
          alt="hyrax"
          width={500} height={50}
          priority />
        <p>
          Hi! This website is currently a work in progress. Please check back soon! <br/> {" "}
        </p>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center" >
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4"
          href="/flags"
          rel="noopener noreferrer" >
          <Image
            aria-hidden
            src={flag}
            alt="flag"
            width={200} height={200} />
          Vexillology
        </a>
        <a
          className="flex flex-col items-center gap-2 hover:underline hover:underline-offset-4"
          href="/maps"
          rel="noopener noreferrer" >
          <Image
            className="bg-white"
            aria-hidden
            src={map}
            alt="map"
            width={200}
            height={200} />
          Cartography
        </a>
      </footer>
    </div>
  );
}

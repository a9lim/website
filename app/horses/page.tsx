import Image from "next/image";
import test from "./temp.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-16 gap-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-7xl font-semibold">
          about
        </h1>
        <p className="w-5/6">
          Hello! I&apos;m Phoebe, a Junior at UCSD. I&apos;m a math major, but considering studying oceanography in grad school. I like to code as a hobby, and have several informal projects up on my Github - I've contributed to a few open source projects in my free time as well. I decided to try picking up javascript, so I made this website!
        </p>
        <h2 className="text-5xl font-semibold"> things i&apos;ve been up to </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-semibold"> Tan Lab </h3>
            <Image
            src={test}
            alt="gowza"
            width={250}
            height={250}
            priority />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-semibold"> One Degree North </h3>
            <Image
            src={test}
            alt="gowza"
            width={250}
            height={250}
            priority />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-semibold"> Spacelab </h3>
            <Image
            src={test}
            alt="gowza"
            width={250}
            height={250}
            priority />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-semibold"> Discord Bot </h3>
            <Image
            src={test}
            alt="gowza"
            width={250}
            height={250}
            priority />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-3xl font-semibold"> Outreach </h3>
            <Image
            src={test}
            alt="gowza"
            width={250}
            height={250}
            priority />
          </div>
        </div>
      </main>
    </div>
  );
}

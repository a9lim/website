import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center p-16 gap-2">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-7xl font-semibold">
          posts
        </h1>
        <ul>
          <li> 
          <Link
            className="flex text-foreground text-lg gap-2 hover:underline hover:underline-offset-4"
            href="/posts/post1" >
            10/17/2024 - a9l.im
          </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

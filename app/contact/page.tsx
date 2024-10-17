export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-8">
      <main className="flex flex-col gap-8 items-center">
	  	<h1 className="text-7xl font-semibold">
		contact
		</h1>
        <ul className="list-disc"> 
		 <li> +1 (858) 585-1057 </li>
		 <li> <a className="hover:underline hover:underline-offset-4" href="mailto:a9lim@protonmail.com"
            rel="noopener noreferrer"> a9lim@protonmail.com </a> </li>
		 <li> <a className="hover:underline hover:underline-offset-4" href="https://github.com/a9lim"
            rel="noopener noreferrer"> github.com/a9lim </a> </li>
		 <li> <a className="hover:underline hover:underline-offset-4" href="https://linkedin.com/in/a9lim/ "
            rel="noopener noreferrer"> linkedin.com/in/a9lim/  </a> </li>
		 </ul>
      </main>
    </div>
  );
}

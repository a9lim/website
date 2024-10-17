export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-16 gap-8" >
      <main className="flex flex-col gap-8 items-center" >
        <h1 className="text-9xl font-semibold" >
          404
        </h1>
        <h2 className="text-3xl"> 
          Worms not found! 
        </h2>
        <p> 
          Please file an inquiry with Wilson Hou as to the current worm location.
        </p>
      </main>
    </div>
  );
}

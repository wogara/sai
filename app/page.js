export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/static.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <button
          className="text-white hover:text-gray-400 p-2 border border-white h-12 w-24 md:w-32 md:text-lg flex items-center justify-center bg-black"
        >
          Enter
        </button>
      </div>
    </main>
  );
}

export default function BackgroundFX() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full top-10 left-10 animate-ping" />
      <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-2xl rounded-full bottom-10 right-10 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

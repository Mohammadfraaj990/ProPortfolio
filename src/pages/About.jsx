export default function About() {
  return (
    <section className="min-h-screen p-12 flex flex-col items-center justify-center bg-black text-cyan-300">
      <h2 className="text-4xl mb-6 neon-text">About Me</h2>
      <p className="max-w-2xl text-center mb-6">
        I’m a developer passionate about building creative AI tools, responsive UIs, and futuristic user experiences.
      </p>
      <div className="flex gap-4">
        <a href="/resume.pdf" target="_blank" className="px-6 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black">👁️ View Resume</a>
        <a href="/resume.pdf" download className="px-6 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-400">📄 Download Resume</a>
      </div>
    </section>
  );
}

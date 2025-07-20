import React from "react";

export default function About() {
  return (
    <section className="min-h-screen pt-32 px-6 bg-black text-cyan-300">
      <h2 className="text-4xl neon-text mb-12 text-center">About Me</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
        I'm Faraz, a passionate AI/ML and web developer focused on building intelligent, visually stunning digital experiences.
      </p>

      <div className="flex justify-center gap-6">
        {/* View Resume */}
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 text-black px-6 py-2 rounded shadow-md hover:bg-cyan-400 transition"
        >
          📄 View Resume
        </a>

        {/* Download Resume */}
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="bg-green-500 text-black px-6 py-2 rounded shadow-md hover:bg-green-400 transition"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </section>
  );
}

export default function Projects() {
  const projects = [
    {
      name: "Jarvis Voice Assistant",
      demo: "https://demo-link.com",
      github: "https://github.com/officiallyfaraz/jarvis"
    },
    {
      name: "AI PDF Chatbot",
      demo: "https://demo-link.com",
      github: "https://github.com/officiallyfaraz/pdf-chatbot"
    }
  ];

  return (
    <section className="min-h-screen pt-32 px-6 bg-black text-white">
      <h2 className="text-4xl mb-6 text-cyan-400 neon-text text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 border border-cyan-500 rounded bg-gray-900">
            <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
            <div className="flex gap-4 mt-4">
              <a href={proj.demo} target="_blank" className="bg-green-500 px-4 py-2 rounded hover:bg-green-400">🚀 Demo</a>
              <a href={proj.github} target="_blank" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">💻 GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

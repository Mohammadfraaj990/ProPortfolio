export default function Skills() {
  const skills = ["JavaScript", "Python", "React", "Tailwind", "Node.js", "AI/ML", "OpenAI APIs"];
  const certifications = [
    "AI For Everyone – Andrew Ng",
    "Machine Learning – Coursera",
    "Frontend Development – Meta"
  ];

  return (
    <section className="min-h-screen pt-32 px-6 bg-black text-cyan-300">
      <h2 className="text-4xl neon-text mb-12 text-center">Skills & Certifications</h2>
      
      <div className="mb-10">
        <h3 className="text-2xl mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 border border-cyan-500 rounded hover:bg-cyan-400 hover:text-black transition">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl mb-4">Certifications</h3>
        <ul className="list-disc ml-6">
          {certifications.map((cert, idx) => (
            <li key={idx} className="mb-2">{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

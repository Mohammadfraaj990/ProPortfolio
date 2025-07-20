export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-cyan-300 p-12 bg-black">
      <h2 className="text-4xl mb-6 neon-text">Contact Me</h2>
      <form action="https://formspree.io/f/xdkdaddr" method="POST" className="max-w-md w-full space-y-4">
        <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 bg-black border border-cyan-500 rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 bg-black border border-cyan-500 rounded" />
        <textarea name="message" required rows="4" placeholder="Your Message" className="w-full p-3 bg-black border border-cyan-500 rounded"></textarea>
        <button type="submit" className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-400">Send</button>
      </form>
    </section>
  );
}

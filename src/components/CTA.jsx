function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_50%_0%,rgba(168,85,247,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to launch your AI agent?</h3>
        <p className="mt-3 text-blue-200/80">Tell us about your use case and we’ll spin up a tailored demo for your brand.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 gap-3">
          <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
          <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Company" />
          <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Work email" />
          <textarea rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="What would you like to build?" />
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 px-6 py-3 text-white shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            Request demo
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;

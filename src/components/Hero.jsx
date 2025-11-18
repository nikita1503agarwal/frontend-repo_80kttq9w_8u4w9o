import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Background aura gradient */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_40%,rgba(168,85,247,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_300px_at_20%_60%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_300px_at_80%_60%,rgba(251,146,60,0.08),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-100 mb-4">
            Future of voice interfaces
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Mode AI builds voice agents that speak your brand
          </h1>
          <p className="mt-6 text-lg text-blue-200/80 max-w-xl mx-auto lg:mx-0">
            Launch AI calling agents, web agents, and automations that convert, support, and close deals—on autopilot.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-white border border-white/20 hover:bg-white/15 transition">
              Get started
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 px-6 py-3 text-white shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              See it in action
            </a>
          </div>
        </div>

        {/* Spline canvas */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full">
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
